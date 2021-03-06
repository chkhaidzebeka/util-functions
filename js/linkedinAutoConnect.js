// steps
// 1. Go to: https://www.linkedin.com/mynetwork/
// 2. open browser consle
// 3. run this script

const sleep = sec => new Promise((resolve) => setTimeout(resolve, sec * 1000));

(async () => {
    const BLACKLIST = ["palitra"];
    const WHITELIST = ["web","frontend","backend","software","developer","pentest","hacker","recruiter","hr","talent"];
    const items = [...document.querySelectorAll(".artdeco-card.artdeco-card--with-hover.ember-view.discover-entity-type-card")]

    for (let i = 0; i<items.length; i++) {
        const el = items[i]

        const name = el.querySelector(".discover-person-card__name")?.innerText
        const company = el.querySelector(".member-insights__reason")?.innerText
        const btn = el.querySelector(".artdeco-button--secondary.ember-view.full-width")
        const btnText = btn.textContent.trim()
        const occup = el.querySelector(".discover-person-card__occupation")?.innerText

        if (!occup || !company) return;
        
        const checkCompany = BLACKLIST.some(element => company.toLowerCase().includes(element))
        const checkOccupation = BLACKLIST.some(element => occup.toLowerCase().includes(element))

        const blackListPassed = !checkCompany && !checkOccupation
        const occupationWhitelistPassed = WHITELIST.some(element => occup.toLowerCase().includes(element))
        const btnTextCheckPassed = btnText === "Connect"
        
        if (blackListPassed && occupationWhitelistPassed) {
            if (btnTextCheckPassed) {
                console.log(`Connecting: ${name} - ${occup} - ${company}`)
                btn.click();
            } else console.warn(`btn validation check failed for ${name}. got "${btnText}" instead of "Connect".`)
        } else console.warn("ignored:",name,company,occup)

        await sleep(1)
    }
})()
