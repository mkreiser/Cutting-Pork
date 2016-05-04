﻿'use strict';

angular.module('cuttingPorkApp')

.constant('CANDIDATES', {
	'Bernie Sanders': {
		name: 'Bernie Sanders',
		image: 'images/candidates/Bernie Sanders/Bernie_Sanders.jpg',
		currentOffice: 'U.S. Senator from Vermont',
		previousOffices: ['U.S. Representative Vermont\'s at-large district', 'Mayor of Burlington, Vermont'],
		party: 'Democratic Party',
		age: 74,
		website: 'https://berniesanders.com/',
		facebook: 'https://www.facebook.com/berniesanders/',
		twitter: 'https://twitter.com/SenSanders',
		wikipedia: 'https://en.wikipedia.org/wiki/Bernie_Sanders',
		media: ['images/candidates/Bernie Sanders/media1.jpg'], //urls
		issues: [{
			name: 'Abortion',
			stance: 'Pro-Choice',
			citations: [{
				text: 'The decision about abortion is a decision for a woman and her doctor to make, not the government. I will not allow the right wing to deny women control over their own bodies by forcing clinics to close, extending waiting periods, or inventing other methods that create de facto abortion bans. Roe v. Wade is the law of the land and must remain so.',
				url: 'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=bernie+sanders+on+abortion&eob=m.01_gbv//short'
			}, {
				text: '“We are not returning to the days of back-room abortions, when countless women died or were maimed,” Sanders wrote in a 2012 article on the Huffington Post.',
				url: 'http://time.com/4192885/bernie-sanderss-abortion-hillary-clinton/'
			}, {
				text: '“I happen to believe that it is wrong for the government to be telling a woman what to do with her own body,” Sanders said.',
				url: 'http://www.huffingtonpost.com/entry/democratic-debate-abortion_us_56de11c8e4b03a405679a43d'
			}]
		}, {
			name: 'Immigration',
			stance: 'Open Immigration',
			citations: [{
				text: 'Immigration reform is uniting people\'s families, not dividing families,',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiPudqvvrDMAhVJbD4KHf7TC2EQjJMBCCEwAQ&url=http%3A%2F%2Fkimatv.com%2Fnews%2Flocal%2Fbernie-sanders-talks-immigration-native-american-history-at-yakima-rally&usg=AFQjCNGqga2BwIAcjnuYMDa_DWSxFnkK8Q&sig2=jMxTK7XpvkOi5UPAsDjhAw'
			}, {
				text: '“We have got to stop the exploitation of undocumented people that is taking place today,” Sanders said.',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiPudqvvrDMAhVJbD4KHf7TC2EQjJMBCCMwAQ&url=http%3A%2F%2Fwww.tri-cityherald.com%2Fnews%2Fpolitics-government%2Farticle68200822.html&usg=AFQjCNH0tswzxCxMEOsASD78nbq70rQlTw&sig2=lErYoLg1rDygAv_sMGwBfg'
			}, {
				text: 'We\'re here to discuss how our country comes together to, among other things, make sure that 11 million undocumented people in our country no longer have to live in the shadows, no longer have to live in fear, but can live in security and dignity,” Sanders said.',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiPudqvvrDMAhVJbD4KHf7TC2EQjJMBCCUwAQ&url=http%3A%2F%2Fwww.usatoday.com%2Fstory%2Fnews%2Fpolitics%2Felections%2F2015%2F12%2F07%2Fsen-bernie-sanders-hosts-live-telecast-immigration%2F76933518%2F&usg=AFQjCNGAM48QlfcSUcsU7tB98Oh6wYAGmw&sig2=3d9ImpisbTgH3oq_IVFl-g'
			}]
		}, {
			name: 'Education',
			stance: 'Increase public funding',
			citations: [{
				text: 'All public colleges and universities should be tuition free.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: 'We need high-quality, affordable early childhood education.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: 'Colleges and universities should hire more faculty and increase their percentage of tenured and tenure-track professors.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: 'Students should not have to reapply for financial aid every year.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: ' No Child Left Behind should be seriously overhauled.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: 'Student loan interest rates should be heavily reduced.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}, {
				text: 'Colleges and universities should expand work study programs to include all interested students.',
				url: 'http://feelthebern.org/bernie-sanders-on-education/'
			}]
		}],
		furtherCitations: [{
			text: 'Bernie Sanders News on Politico',
			url: 'http://www.politico.com/news/bernie-sanders'
		}, {
			text: 'Bernie Sanders OnTheIssues page',
			url: 'http://www.ontheissues.org/house/Bernie_Sanders.htm'
		}, {
			text: 'Bernie Sanders News on FiveThirtyEight',
			url: 'http://fivethirtyeight.com/tag/bernie-sanders/'
		}]
	},
	'Donald Trump': {
		name: 'Donald Trump',
		image: 'images/candidates/Donald Trump/Donald Trump.jpg',
		currentOffice: 'Private Citizen (Businessman)',
		previousOffices: ['No public offices held'],
		party: 'Republican Party',
		age: 69,
		website: 'https://www.donaldjtrump.com/',
		facebook: 'https://www.facebook.com/DonaldTrump/',
		twitter: 'https://twitter.com/realDonaldTrump',
		wikipedia: 'https://en.wikipedia.org/wiki/Donald_Trump',
		media: ['images/candidates/Donald Trump/media1.jpg'], //urls
		issues: [{
			name: 'Abortion',
			stance: 'Pro-Life',
			citations: [{
				text: 'Public funding of abortion providers is an insult to people of conscience at the least and an affront to good governance at best.',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj16b7PwLDMAhWKND4KHcetDq8QjJMBCCIwAQ&url=http%3A%2F%2Fwww.politifact.com%2Ftexas%2Farticle%2F2016%2Ffeb%2F17%2Fted-cruz-ad-assailed-trump-leaves-out-trumps-decla%2F&usg=AFQjCNE7KECP5f5HhdFQiXs7aR09-GKbpw&sig2=N3reBsYwis4xd1OgtYjuLA'
			}, {
				text: 'I\'m pro-life, but with the caveats. It\'s: Life of the mother (very important), incest and rape',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj16b7PwLDMAhWKND4KHcetDq8QjJMBCCQwAQ&url=https%3A%2F%2Fwww.washingtonpost.com%2Fnews%2Fwonk%2Fwp%2F2015%2F10%2F15%2Fi-asked-psychologists-to-analyze-trump-supporters-this-is-what-i-learned%2F&usg=AFQjCNFtCQIvV0A3m_gSeAt7VrMEz33YNA&sig2=MYPH8F_1jOJcBsWaETP3xQ'
			}, {
				text: 'Trump, explaining why he was inspired to change his position on abortion, spoke of watching an unnamed friend decide against ending a pregnancy: “It was going to be aborted and that child today is a total superstar. It is a great, great child.',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj16b7PwLDMAhWKND4KHcetDq8QjJMBCCgwAQ&url=http%3A%2F%2Fwww.vanityfair.com%2Fnews%2F2015%2F08%2Frepublican-debate-highlights-best-moments&usg=AFQjCNH-zyjjWqs_npznnB3gDa-JqJdhlA&sig2=qGVPInmsJgTI5Cg20Bce0g'
			}]
		},
		{
			name: 'Gun Rights',
			stance: 'Pro Gun Rights',
			citations: [{
				text: 'Voicing his support for the Second Amendment, Trump argued that the recent massacre in Paris would have \“would have played out differently with the bullets flying in the other direction.\”', 
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwir8MSmwrDMAhUHGD4KHUrhAmYQjJMBCCAwAQ&url=https%3A%2F%2Fyourdailyjournal.com%2Fnews%2F24172%2Fin-fayetteville-trump-vows-to-restore-lost-n-c-jobs&usg=AFQjCNH7sIAl65yukRXkYbnTHEJ10qAS6A&sig2=-sddWdG_MLVnuJ_-e9U4Bw'
			}, {
				text: '\“The right of self-defense doesn\'t stop at the end of your driveway. That\'s why I have a concealed carry permit and why tens of millions of Americans do too. That permit should be valid in all 50 states,\” he wrote.',
				url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwir8MSmwrDMAhUHGD4KHUrhAmYQjJMBCCIwAQ&url=http%3A%2F%2Fwww.cnn.com%2F2015%2F10%2F03%2Fpolitics%2Fdonald-trump-oregon-shooting-armed-teachers%2F&usg=AFQjCNEJOzsZdfo_viC_mv43QQicIL7BBA&sig2=HzRXssyMRvZfCU8cUcWWEQ'
			}]
		}],
		furtherCitations: [{
			text: 'Donald Trump News on Politico',
			url: 'http://www.politico.com/news/donald-trump'
		}, {
			text: 'Donald Trump OnTheIssues page',
			url: 'http://www.ontheissues.org/Donald_Trump.htm'
		}, {
			text: 'Donald Trump News on FiveThirtyEight',
			url: 'http://fivethirtyeight.com/tag/donald-trump/'
		}]
	},
	'Hillary Clinton': {
		name: 'Hillary Clinton',
		image: 'images/candidates/Hillary Clinton/Hillary Clinton.jpg',
		currentOffice: 'Private Citizen',
		previousOffices: ['U.S. Secretary of State', 'U.S. Senator from New York', 'First Lady of U.S.', 'First Lady of Arkansas'],
		party: 'Democratic Party',
		age: 68,
		website: 'https://www.hillaryclinton.com/',
		facebook: 'https://www.facebook.com/hillaryclinton/',
		twitter: 'https://twitter.com/HillaryClinton',
		wikipedia: 'https://en.wikipedia.org/wiki/Hillary_Clinton',
		media: ['images/candidates/Hillary Clinton/media1.jpg'], //urls
		issues: [{
			name: 'Abortion',
			stance: 'Pro-Choice',
			citations: [''] //urls
		},
		{
			name: 'Gun Rights',
			stance: 'Pro Gun Control',
			citations: [''] //urls
		}],
		furtherCitations: [{
			text: 'Hillary Clinton News on Politico',
			url: 'http://www.politico.com/news/hillary-clinton'
		}, {
			text: 'Hillary Clinton OnTheIssues page',
			url: 'http://www.ontheissues.org/Hillary_Clinton.htm'
		}, {
			text: 'Hillary Clinton News on FiveThirtyEight',
			url: 'http://fivethirtyeight.com/tag/hillary-clinton/'
		}]
	},
	'Ted Cruz': {
		name: 'Ted Cruz',
		image: 'images/candidates/Ted Cruz/Ted Cruz.jpg',
		currentOffice: 'U.S. Senator from Texas',
		previousOffices: ['Solicitor General of Texas'],
		party: 'Republican Party',
		age: 45,
		website: 'https://www.tedcruz.org/',
		facebook: 'https://www.facebook.com/tedcruzpage/',
		twitter: 'https://twitter.com/tedcruz',
		wikipedia: 'https://en.wikipedia.org/wiki/Ted_Cruz',
		media: ['images/candidates/Ted Cruz/media1.jpg'], //urls
		issues: [{
			name: 'Abortion',
			stance: 'Pro-Life',
			citations: [''] //urls
		},
		{
			name: 'Gun Rights',
			stance: 'Pro Gun Rights',
			citations: [''] //urls
		}],
		furtherCitations: [{
			text: 'Ted Cruz News on Politico',
			url: 'http://www.politico.com/news/ted-cruz'
		}, {
			text: 'Ted Cruz OnTheIssues page',
			url: 'http://www.ontheissues.org/Senate/Ted_Cruz.htm'
		}, {
			text: 'Ted Cruz News on FiveThirtyEight',
			url: 'http://fivethirtyeight.com/tag/ted-cruz/'
		}]
	},
})
.constant('ISSUES', {
	'Immigration': {
		name: 'Illegal Immigration',
		description: 'This issue refers to the population of undocumented immigrants currently living in or attempting to enter the United States and the actions we should take against them. Most notabley, whether or not we should deport them or give them amnesty and citizenship. This issue grows complicated when dealing with immigrants who either came to the country as children or were born from parents occupying the country illegaly.',
		argumentsInSupport: ['Immigration is good for the economy.', 'It would cost the United States a large sum of money to deport all 11 million estimated undocumented immigrants.', 'Immigration is a natural right provided to everyone through our humanity.'],
		argumentsAgainst: ['It will cost the U.S. an estimated $6.3 trillion to give amnesty to all current illegal immigrants.*', 'It is unfair to both the working class paying to live in the U.S. (taxes) as well as those who attempt to immigrate legally.', 'A country has a right to its borders and to decide how people can enter and exit the country.'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: ['http://www.heritage.org/research/reports/2013/05/the-fiscal-cost-of-unlawful-immigrants-and-amnesty-to-the-us-taxpayer'] //urls
	},
	'Supreme Court': {
		name: 'Obama\'s Supreme Court Nomination of Merrick Garland',
		description: 'The very republican Supreme Court Justice Antonin Scalia died leaving President Obama to nominate somebody to take his place. However, the republican controlled senate has stated that they will not endorse this nomination and have made all efforts to block the nomination.',
		argumentsInSupport: ['Obama is constitutionaly required to make a nomination', 'The republicans are merely trying to prevent a Democratically controlled Supreme Court, not give the people a voice.', 'Obama gave the senate the courtesy of reviewing his nomination, if senate does nothing, he can appoint Garland without the consent of the Senate.'],
		argumentsAgainst: ['President Obama made this nomination to politicize it for the purposes of the election.', 'Let the american people decide, it\'s an election year, the duty should be on the next elected president.'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump','Mitch McConnel'], //candidates
		furtherCitations: [''] //urls
	},
	'Abortion': {
		name: 'Abortion: Pro-life or Pro-Choice.',
		description: 'The distinction in the title is important because neither sides of the argument want to see abortion happen if it can be avoided. The dispute is between wether a female can have an abortion at all. People who claim Pro-Life generally believe that abortion should be illegal and those who identify as Pro-Choice defend that a women should be allowed to decide what happens to her body. This argument becomes cloudy when addressing certain scenarios like pregnancy due to rape. In support means that someone is Pro-Choice and favors legal abortion and Against means that they believe laws should prevent abortion.',
		argumentsInSupport: ['Making abortion illegal only makes them less safe, not less frequent.', 'Religious ideology is no foundation for any law.', 'Most people who are against abortion will never become pregnant themselves.' , 'It is just a blob of tissue, fully dependent on the mother, unlike born human beings.'],
		argumentsAgainst: ['Women experiencing an unplanned pregnancy should be given the support she needs to carry the baby to term, not left to fend for herself and seeing abortion as an easy solution.', 'Life is not an abstract argument; undisputed science, from a host of sources*, states that life begins at conception.', 'Pro-Life laws actually improve womens health by holding abortion clinics to higher standards.'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: ['http://liveactionnews.org/four-non-religious-reasons-to-be-pro-life/' , 'https://www.princeton.edu/~prolife/articles/embryoquotes2.html', 'http://amplifyyourvoice.org/u/pheo152/2009/01/26/10-arguments-in-favor-of-prochoice-policy/'] //urls
	},
	'Campaign Finance': {
		name: 'Campaign Finance',
		description: 'The issue of campaign finance focuses primarily on the rising costs of running for election and the increasing reliance on the private sector to fund campaigns.',
		argumentsInSupport: ['All 50 states mandate that candidates for elective office report the contributions they receive and the expenditures they make while pursuing public office.', 'There is a limit to how much money and individual person, group, or coorporation can donate to a campaign.' , 'If we make raising money more difficult, we make it much harder to remove incumbents from their seats since they can use their office to pay for their campaign on taxpayer dime via constituent outreach.'],
		argumentsAgainst: ['Relying on the private sector to pay for a campaign puts pressure on a politician to act a certain way, favoring their supporters personal interest if elected.', 'Super-PACS are a loophole to get around contribution limits from individuals and coorporations.'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	}, 
	'Financial Reform': {
		name: 'Financial Reform',
		description: 'This issue refers to the reform of the financial industry and the regulation of the financial industry, for example the recent $700 billion bail out of big banks.',
		argumentsInSupport: ['Corporate corruption and greed are widening the gap between the rich and the poor.', 'Too-Big-To-Fail institutions proceeded to get larger after the $700 billion bail out and have made no changes to fix the problems that caused the bail out in the first place', 'BLAH3'],
		argumentsAgainst: ['Regulation burdens the economy', 'The economy should be a free market with no government interference'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	},
	'Education': {
		name: 'Education',
		description: 'Education is important in the early ages of a childs life and provides the key to unlock potential in life. Public schools in the U.S. leave a lot to be desired and many people argue that the whole system needs to be changed.',
		argumentsInSupport: ['All students deserve the opportunity to receive an affordable, quality education from the earliest stages of schooling to high-level degrees.', 'Many schools are overcrowded, leading to a lower quality of education', 'Teachers have tenure making it extremely difficult to fire them, even if they are terrible at what they do and are more of a detriment to the kids than a helpful presence.'],
		argumentsAgainst: ['The National Assessment of Educational Progress scores have been higher than ever before.', 'The public school dropout rate is the lowest it has been in years.', 'Teach for America recruits do worse than credentialed union teachers with tenure.'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	}
});
