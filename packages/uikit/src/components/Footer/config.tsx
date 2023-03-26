import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
import { TwitterIcon, TelegramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";
export var footerLinks = [
    {
        label: "About",
        items: [
            {
                label: "Contact",
                href: "https://docs.pancakeswap.finance/contact-us"
            },
            {
                label: "Blog",
                href: "https://medium.com/pancakeswap"
            },
            {
                label: "Community",
                href: "https://docs.pancakeswap.finance/contact-us/telegram"
            },
            {
                label: "CAKE",
                href: "https://docs.pancakeswap.finance/tokenomics/cake"
            },
            {
                label: "—"
            },
            {
                label: "Online Store",
                href: "https://pancakeswap.creator-spring.com/",
                isHighlighted: true
            }, 
        ]
    },
    {
        label: "Help",
        items: [
            {
                label: "Customer",
                href: "Support https://docs.pancakeswap.finance/contact-us/customer-support"
            },
            {
                label: "Troubleshooting",
                href: "https://docs.pancakeswap.finance/help/troubleshooting"
            },
            {
                label: "Guides",
                href: "https://docs.pancakeswap.finance/get-started"
            }, 
        ]
    },
    {
        label: "Developers",
        items: [
            {
                label: "Github",
                href: "https://github.com/pancakeswap"
            },
            {
                label: "Documentation",
                href: "https://docs.pancakeswap.finance"
            },
            {
                label: "Bug Bounty",
                href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty"
            },
            {
                label: "Audits",
                href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited"
            },
            {
                label: "Careers",
                href: "https://docs.pancakeswap.finance/hiring/become-a-chef"
            }, 
        ]
    }, 
];
export var socials = [
    {
        label: "Twitter",
        icon: TwitterIcon,
        href: "https://twitter.com/shadowswap_xyz"
    },
    {
        label: "Telegram",
        icon: TelegramIcon,
        items: [
            {
                label: "English",
                href: "https://t.me/shadowswap.xyzcore"
            }, 
        ]
    },
    {
        label: "Github",
        icon: GithubIcon,
        href: "https://github.com/shadowswap/"
    },
    {
        label: "Discord",
        icon: DiscordIcon,
        href: "https://discord.gg/awdRqenFXR"
    },
    {
        label: "Medium",
        icon: MediumIcon,
        href: "https://medium.com/@shadowswap"
    }, 
];
export var langs = _to_consumable_array(Array(20)).map(function(_, i) {
    return {
        code: "en".concat(i),
        language: "English".concat(i),
        locale: "Locale".concat(i)
    };
});
