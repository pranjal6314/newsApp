import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from '../NewsItem'

  
export default class News extends Component {
     articles= [
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "EU vows to protect energy systems after 'sabotage' on Russian gas pipelines - Reuters",
          "description": "Any intentional disruption to EU energy networks would meet a \"robust and united response\", its top diplomat said, after several states said two Russian pipelines to Europe had been attacked, causing gas to spew into the Baltic Sea.",
          "url": "https://www.reuters.com/business/energy/mystery-gas-leaks-hit-major-russian-undersea-gas-pipelines-europe-2022-09-27/",
          "urlToImage": "https://www.reuters.com/resizer/ydZwOrTwG6XqS_HA3c1DiSdXTWw=/1146x600/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/USLK7ZURXZJQJL4HVURMPVASMU.jpg",
          "publishedAt": "2022-09-28T12:41:00Z",
          "content": "BERLIN/COPENHAGEN, Sept 28 (Reuters) - Any intentional disruption to EU energy networks would meet a \"robust and united response\", its top diplomat said, after several states said two Russian pipelin… [+6210 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Page Six"
          },
          "author": "Riley Cardoza",
          "title": "Hailey Bieber: Justin 'closed a chapter' with Selena Gomez before our marriage - Page Six",
          "description": "“I was never in a relationship with him when he was with anybody,” the model said, breaking down the “timeline” of her and Justin Bieber’s relationship.",
          "url": "https://pagesix.com/2022/09/28/hailey-bieber-justin-closed-selena-gomez-chapter-before-marriage/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/09/hailey-justin-bieber-selena-gomez-00.jpg?quality=75&strip=all&w=1200",
          "publishedAt": "2022-09-28T11:19:00Z",
          "content": "Hailey Bieber is describing for the first time how her husband, Justin Bieber, “closed a chapter” with his ex Selena Gomez before their marriage.\r\nThe model broke down the “timeline” of her July 2018… [+2620 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "Mike Murphy",
          "title": "Hackers hijack Fast Company, send obscene push alert through Apple News - MarketWatch",
          "description": "Fast Company takes down website after its CMS is breached",
          "url": "https://www.marketwatch.com/story/hackers-hijack-fast-company-send-obscene-push-alert-through-apple-news-11664331724",
          "urlToImage": "https://images.mktw.net/im-608290/social",
          "publishedAt": "2022-09-28T11:18:00Z",
          "content": "Many Apple News users received a push notification Tuesday containing racist and obscene language, the result of a hack.The offensive message came in a push alert around 8:18 p.m. Eastern from the ac… [+1232 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Nouran Salahieh, Jason Hanna",
          "title": "Deadly Hurricane Ian, nearing Category 5 strength, threatens 'catastrophic' storm surge as it nears Florida. It's too late to leave for many, governor says - CNN",
          "description": "Hurricane Ian -- now an \"extremely dangerous\" Category 4 storm -- has begun lashing Florida with ruinous winds and rain as it advances on the state's west coast, poised to inflict \"catastrophic,\" potentially unprecedented storm surge as it nears a Wednesday a…",
          "url": "https://www.cnn.com/2022/09/28/weather/hurricane-ian-florida-path-wednesday/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220928020455-ian-satellite-wednesday-2a.jpg?q=w_800,c_fill",
          "publishedAt": "2022-09-28T11:06:00Z",
          "content": "Editors Note: Affected by the storm? Use CNNs lite site for low bandwidth. You also can text or WhatsApp your Ian stories to CNN +1 332-261-0775.\r\nHurricane Ian now an extremely dangerousCategory 4 s… [+8318 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Diana Olick",
          "title": "Mortgage refinancing drops to a 22-year low as interest rates surge even higher - CNBC",
          "description": "Mortgage rates drove higher last week after the Federal Reserve signaled it would continue its aggressive action to cool inflation. That hurt mortgage demand.",
          "url": "https://www.cnbc.com/2022/09/28/mortgage-refinancing-drops-to-a-22-year-low-.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/102075466-IMG_3522_copy.jpg?v=1664362801&w=1920&h=1080",
          "publishedAt": "2022-09-28T11:00:01Z",
          "content": "Mortgage rates drove even higher last week after the Federal Reserve signaled it would continue its aggressive action to cool inflation. That, and rising uncertainty in the overall housing market, ca… [+1740 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bleeding Green Nation"
          },
          "author": "Brandon Lee Gowton",
          "title": "Eagles News: More punt returns for DeVonta Smith? - Bleeding Green Nation",
          "description": "Philadelphia Eagles news and links for 9/28/22.",
          "url": "https://www.bleedinggreennation.com/2022/9/28/23376371/eagles-news-devonta-smith-punt-returns-philadelphia-pr-britain-covey-nfl-football-more",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/ilsQDGPFDIXx8fJ4Dt-KoD0k3m0=/0x0:2887x1512/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24060991/usa_today_19117546.jpg",
          "publishedAt": "2022-09-28T10:16:44Z",
          "content": "Lets get to the Philadelphia Eagles links ...\r\nNick Sirianni wants DeVonta Smith returning punts when Eagles need a spark - PFTWe wanted a little spark, Sirianni said, via the Philadelphia Inquirer. … [+10698 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": null,
          "title": "Poll: Majority supports reforming electoral vote count law - POLITICO",
          "description": "A new POLITICO/Morning Consult poll finds voters want to strengthen the 19th-century Trump tried to exploit after the 2020 election.",
          "url": "https://www.politico.com/news/2022/09/28/electoral-count-reforms-majority-support-00059144",
          "urlToImage": "https://static.politico.com/21/c4/d6bf25494f5fbca5778249c81a1c/congress-electoral-college-90323.jpg",
          "publishedAt": "2022-09-28T10:00:00Z",
          "content": "Following the Trump-fueled riot at the Capitol and the promotion of legal theories to stop Congress certification of the 2020 presidential election results, legislators in both chambers took up revie… [+5059 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Rob Picheta",
          "title": "Russian forces have staged illegal 'referendums' in Ukraine. What comes next? - CNN",
          "description": "Pro-Russian authorities have held so-called referendums in four regions of Ukraine over recent days and, while the votes are illegal and have been universally dismissed as \"a sham\" by Ukraine and Western nations, there are fears that they could create a prete…",
          "url": "https://www.cnn.com/2022/09/27/europe/ukraine-russia-referendum-explainer-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220923082042-02-ukraine-referendum.jpg?q=w_800,c_fill",
          "publishedAt": "2022-09-28T09:58:00Z",
          "content": "Pro-Russian authorities have held so-called referendums in four regions of Ukraine over recent days and, while the votes are illegal and have been universally dismissed as a sham by Ukraine and Weste… [+10748 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "STAT"
          },
          "author": null,
          "title": "Alzheimer's treatment slowed cognitive decline in closely watched trial - STAT",
          "description": "An investigational Alzheimer’s disease treatment from Biogen and Eisai slowed the rate of cognitive decline by 27% in a clinical trial, the companies said Tuesday, meeting the goals of a closely tracked study.",
          "url": "https://www.statnews.com/2022/09/27/alzheimers-treatment-slowed-cognitive-decline-in-closely-watched-clinical-trial/",
          "urlToImage": "https://www.statnews.com/wp-content/uploads/2022/06/AdobeStock_205319783-1024x576.jpeg",
          "publishedAt": "2022-09-28T09:04:29Z",
          "content": "An investigational Alzheimers disease treatment from Biogen and Eisai slowed the rate of cognitive decline by 27% in a clinical trial, the companies said Tuesday, meeting the goals of a closely track… [+7565 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SciTechDaily"
          },
          "author": null,
          "title": "Drinking Two to Three Cups of Coffee Daily Is Linked With a Longer Lifespan - SciTechDaily",
          "description": "Drinking two to three cups of coffee a day is associated with a longer lifespan and a lower risk of cardiovascular disease compared with avoiding coffee. This is according to new research published on September 27 in the European Journal of Preventive Cardiol…",
          "url": "https://scitechdaily.com/drinking-two-to-three-cups-of-coffee-daily-is-linked-with-a-longer-lifespan/",
          "urlToImage": "https://scitechdaily.com/images/Pouring-Coffee-Cup.jpg",
          "publishedAt": "2022-09-28T08:53:30Z",
          "content": "According to a new study, drinking two to three cups of coffee a day is linked with a longer lifespan and a lower risk of cardiovascular disease.\r\nDrinking two to three cups of coffee a day is associ… [+5014 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": null,
          "title": "Why Manchin backed off on his top priority - POLITICO",
          "description": "Facing the apparent limits of his leverage after 20 months exerting it over a 50-50 Senate, the West Virginia centrist strategically retreated on energy permitting.",
          "url": "https://www.politico.com/news/2022/09/28/manchin-senate-permitting-reform-00059152",
          "urlToImage": "https://static.politico.com/d2/b4/ce6e30e14dfcb5fc9eac0d3da1f2/2022-0927-manchin-3200-2-edit.jpg",
          "publishedAt": "2022-09-28T08:30:00Z",
          "content": "But Manchins final major priority after a stretch in which everything broke his way needed the support of Republicans. And there were simply too many problems for him to solve in too short a time aft… [+6178 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Kathleen Magramo, Taylor Ward, Jan Camenzind Broomby",
          "title": "Hundreds of thousands evacuated as Typhoon Noru makes landfall in Vietnam's Da Nang - CNN",
          "description": "Typhoon Noru made landfall near Vietnam's popular beach resort city of Da Nang on Wednesday morning, bringing powerful winds and heavy rain as hundreds of thousands of people were evacuated.",
          "url": "https://www.cnn.com/2022/09/27/asia/vietnam-typhoon-noru-da-nang-intl-hnk/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220928011040-03-vietnam-typhoon-noru-landfall-intl-hnk-092822.jpg?q=w_800,c_fill",
          "publishedAt": "2022-09-28T08:26:00Z",
          "content": "Typhoon Noru made landfall near Vietnams popular beach resort city of Da Nang on Wednesday morning, bringing powerful winds and heavy rain ashundredsof thousands of people were evacuated.\r\nNoru hit V… [+3502 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Batteries inside older Samsung phones are swelling at a disproportionately high rate - Android Police",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2JhdHRlcmllcy1pbnNpZGUtb2xkZXItc2Ftc3VuZy1waG9uZXMtc3dlbGxpbmctZGlzcHJvcG9ydGlvbmF0ZWx5LWhpZ2gtcmF0ZS_SAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-09-28T08:18:00Z",
          "content": null
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "U.S. VP Harris condemns 'disturbing' Chinese actions - Reuters",
          "description": "U.S. Vice President Kamala Harris condemned on Wednesday \"disturbing\" actions by China in the Pacific while pledging to deepen \"unofficial ties\" with Taiwan, days after the U.S. administration pledged its forces would defend the island.",
          "url": "https://www.reuters.com/world/us-vp-harris-push-against-chinas-taiwan-policy-japan-speech-2022-09-27/",
          "urlToImage": "https://www.reuters.com/resizer/4dmOb1vYiLlMCvpM6noUE0fkGo8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GHANJGPKIVPX5AW5LQSQOEVJ7I.jpg",
          "publishedAt": "2022-09-28T08:14:00Z",
          "content": "YOKOSUKA, Japan, Sept 28 (Reuters) - U.S. Vice President Kamala Harris condemned on Wednesday \"disturbing\" actions by China in the Pacific while pledging to deepen \"unofficial ties\" with Taiwan, days… [+3902 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "TMZ"
          },
          "author": "TMZ Staff",
          "title": "Jeffrey Dahmer Prosecutor Denies Racial & Homophobic Bias From Cops - TMZ",
          "description": "The prosecutor who put Jeffrey Dahmer behind bars is pushing back against the narrative Netflix puts forth in its new show -- namely, that cops had it out for gay and Black people.",
          "url": "https://www.tmz.com/2022/09/28/jeffrey-dahmer-prosecutor-denies-racial-homophobic-bias-police/",
          "urlToImage": "https://imagez.tmz.com/image/d6/16by9/2022/09/27/d6d7d7220b8d43518d81f3de848d205f_xl.jpg",
          "publishedAt": "2022-09-28T08:00:00Z",
          "content": "The prosecutor who put Jeffrey Dahmer behind bars is pushing back against the narrative Netflix puts forth in its new show -- namely, that cops ignored obvious clues because the case involved gay and… [+1952 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Martin Pengelly",
          "title": "Top Republican urged murder charges for women who defied abortion ban - The Guardian US",
          "description": "Pennsylvania governor hopeful Doug Mastriano made comments in 2019 while discussing abortion bill he proposed as state senator",
          "url": "https://amp.theguardian.com/us-news/2022/sep/27/republican-pennsylvania-doug-mastriano-abortion-murder",
          "urlToImage": null,
          "publishedAt": "2022-09-28T06:11:15Z",
          "content": "RepublicansPennsylvania governor hopeful Doug Mastriano made comments in 2019 while discussing abortion bill he proposed as state senator\r\nAsked in 2019 if he was saying women should be charged with … [+3077 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Matthew Hay Brown, Ana Vanessa Herrero",
          "title": "Cuba suffers total electrical outage after Hurricane Ian - The Washington Post",
          "description": "Cuban authorities began bringing electricity back to the island early Wednesday after Hurricane Ian knocked out power to the entire country.",
          "url": "https://www.washingtonpost.com/world/2022/09/27/cuba-electrical-outage-hurricane-ian-damage/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2HLMWWB6X4I63DDOSODL27GYEY.jpg&w=1440",
          "publishedAt": "2022-09-28T05:40:00Z",
          "content": "Cuban authorities began bringing electricity back to the island early Wednesday but warned restoring it would be slow after Hurricane Ian knocked out power to the entire country.\r\nGovernment crews wo… [+3888 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Kevin Iole",
          "title": "Is Bo Nickal the LeBron James of MMA? UFC may have won the lottery with newest signing - Yahoo Sports",
          "description": "Nickal is so talented, so confident and so impressive that after finishing Donovan Beard in just 52 seconds with a triangle choke Tuesday at Apex to finally ...",
          "url": "https://sports.yahoo.com/is-bo-nickal-the-lebron-james-of-mma-ufc-may-have-won-the-lottery-with-newest-signing-043759082.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/q.4uTx4pAsFUTVWeVCFCqA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTc-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/3d2a03f0-3ee5-11ed-bfeb-be2f2e1a1332",
          "publishedAt": "2022-09-28T04:37:00Z",
          "content": "LAS VEGAS There are first overall draft picks, and then there are guys like LeBron James, Peyton Manning and Sidney Crosby. They are the greats among the great, guys who arent only stars but change t… [+4097 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Carma Hassan",
          "title": "US sees increase in respiratory infections that can lead to paralysis in children, CDC data shows - CNN",
          "description": "Doctors should prepare for a possible increase in young patients with enterovirus D68, the US Centers for Disease Control and Prevention reported Tuesday, and that may be linked to more cases of the rare, paralyzing condition acute flaccid myelitis.",
          "url": "https://www.cnn.com/2022/09/27/health/respiratory-illness-enterovirus-d68/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/200609110256-cdc-atlanta-logo.jpg?q=w_800,c_fill",
          "publishedAt": "2022-09-28T04:08:00Z",
          "content": "Doctors should prepare for a possible increase in young patients with enterovirus D68, the US Centers for Disease Control and Prevention reported Tuesday, and that may be linked to more cases of the … [+1801 chars]"
        },
        {
          "source": {
            "id": "entertainment-weekly",
            "name": "Entertainment Weekly"
          },
          "author": "Lester Fabian Brathwaite",
          "title": "Maisie Williams recalls traumatic relationship with her 'indoctrinated' by her father - Entertainment Weekly News",
          "description": "The <em>Game of Thrones</em> actress opened up about her traumatic childhood and coming to grips with her past.",
          "url": "https://ew.com/celebrity/maisie-williams-father-child-cult-traumatic-childhood/",
          "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B980%2C493%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F09%2F28%2FMaisie-Williams-Traumatic-Relationship-Father-092722.jpg",
          "publishedAt": "2022-09-28T03:06:00Z",
          "content": "Maisie Williams recently opened up about her traumatic relationship with her father, whom she says \"indoctrinated\" her into a \"child cult\" against her mother.\r\nThe Game of Thrones actress made these … [+2591 chars]"
        }
      ]
    constructor(){
        super();
        console.log("this is a constructor from news component");
        this.state={
            articles :this.articles,
            loading:false
        }

    }
    if (loading) {
        return <p>Data is loading...</p>;
      }
  render() {
    return (
        
            <div className='container my-3 '>
                <h2>NewsApp - Top HeadLines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4"  key={element.url}>
                        {/* <NewsItem title={element.title.slice(0,45)} newsUrl={element.url}  description={element.description.slice(0,88)} imgUrl={element.urlToImage} /> */}
                        <NewsItem title={element.title} newsUrl={element.url}  description={element.description} imgUrl={element.urlToImage} />
                    </div>

                })}
                    
                    
                </div>
                
            </div>
           
    
        
      
  )}
}