'use strict';

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
		name: 'Immigration',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	},
	'Supreme Court': {
		name: 'Supreme Court',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	},
	'Abortion': {
		name: 'Abortion',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	},
	'Campaign Finance': {
		name: 'Campaign Finance',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	}, 
	'Financial Reform': {
		name: 'Financial Reform',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	},
	'Education': {
		name: 'Education',
		description: 'Brief description',
		argumentsInSupport: ['BLAH1', 'BLAH2', 'BLAH3'],
		argumentsAgainst: ['NAH1', 'NAH2', 'NAH3'],
		candidatesInSupport: ['Bernie Sanders'], //candidates
		candidatesAgainst: ['Donald Trump'], //candidates
		furtherCitations: [''] //urls
	}
});
