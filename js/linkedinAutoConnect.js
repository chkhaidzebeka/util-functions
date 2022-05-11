const BLACKLIST = ["SOME_COMPANY"];
const WHITELIST = ["web","frontend","backend","software","developer","pentest","hacker","recruiter","hr","talent"];
const items = [...document.querySelectorAll(".artdeco-card.artdeco-card--with-hover.ember-view.discover-entity-type-card")]

for (let i = 0; i<items.length; i++) {
    setTimeout(() => {
        const el = items[i]

        const name = el.querySelector(".discover-person-card__name")?.innerText
        const company = el.querySelector(".member-insights__reason")?.innerText
        const btn = el.querySelectorAll("button")[1]
        const occup = el.querySelector(".discover-person-card__occupation")?.innerText

        if (!occup || !company) return;
        
        const checkCompany = BLACKLIST.some(element => company.toLowerCase().includes(element))
        const checkOccupation = BLACKLIST.some(element => occup.toLowerCase().includes(element))

        const blackListPassed = !checkCompany && !checkOccupation

        const occupationWhitelistPassed = WHITELIST.some(element => occup.toLowerCase().includes(element))

        
        if (blackListPassed && occupationWhitelistPassed) {
            console.log(name,company,occup)
            btn.click()
        } else console.warn(name,company,occup)
        
    }, 1000*i)
}
