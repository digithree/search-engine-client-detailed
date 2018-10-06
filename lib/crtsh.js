const Path = require('path');
const Nightmare = require('nightmare');
const defaults = require("./defaults.js");
const unique = require('array-unique');

const SEC_DEFAULT_OPTIONS = defaults.SEC_DEFAULT_OPTIONS;

//https://github.com/thibauts/node-google-search-scraper/blob/master/index.js
const SEARCH_ENGINE_URL = "https://crt.sh";
const LINK_SELECTOR = "td.outer table tbody tr td:nth-child(5)";
const ENGINE = Path.basename(__filename, ".js");
const PERSIST_NAME = "sec-" + ENGINE;
const SEARCH_TEXTBOX_SELECTOR = 'form[name="search_form"] [name=q]';
const SEARCH_SUBMIT_SELECTOR = 'form[name="search_form"] input[type="submit"]';
const NOT_FOUND_STR = "(did not match any document)|(No results found)|(hiçbir arama sonucu mevcut değil)|(hiçbir sonuç bulunamadı)|(not find results)";

function _decode_links(links) {
	return links;
}

async function GetLinks(_text, options) {
	options = defaults.check_options(options);
	const NIGHTMARE_OPTIONS = defaults.get_nm_options(options, PERSIST_NAME);
	let nm = Nightmare(NIGHTMARE_OPTIONS);
    let text='%'+_text;

	var result = {
		engine: ENGINE,
		search: text,
		count: 10,
		links: [],
		error: false,
		msg: ""
	};

	//search text
	var searchResultExists = await nm.useragent(options.agent)
		.viewport(1024, 768)
		.goto(SEARCH_ENGINE_URL, NIGHTMARE_OPTIONS.headers)
		.wait("body")
		.wait(SEARCH_TEXTBOX_SELECTOR)
		.wait(options.wait)
		.type(SEARCH_TEXTBOX_SELECTOR, text)
		.click(SEARCH_SUBMIT_SELECTOR)
		.wait("body")
		.wait(options.wait)
        .exists(LINK_SELECTOR)

    if (searchResultExists) {
        result.links = await nm.evaluate((selector) => {
                var elements = [].slice.call(document.querySelectorAll(selector))
                var links = elements.map(elements => elements.innerText)
                return links;
            }, LINK_SELECTOR)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                if (options.debug) console.log(err);
                result.error = true;
                result.msg = `first search=\"${text}\" search result count is ${result.count} but 0 link captured.`;
                return [];
            });
    } else {
        result.links = [];
        result.error = true;
        result.count = -1;
        result.msg = `search=\"${text}\" search result count is ${result.count} but search result not exists.`;
    }

	if (options.screenshot) await nm.screenshot(`${PERSIST_NAME}-before-end.png`);
	await nm.end();

	result.links = _decode_links(result.links);

	return result;
}

module.exports = GetLinks;
