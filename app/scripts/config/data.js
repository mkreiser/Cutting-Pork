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
				text: 'this is a text blob1',
				url: ''
			}, {
				text: 'this is a text blob2',
				url: ''
			}, {
				text: 'this is a text blob3',
				url: ''
			}]
		}, {
			name: 'Supreme Court',
			stance: 'Hold hearing now',
			citations: [{
				text: 'this is a text blob1',
				url: ''
			}, {
				text: 'this is a text blob2',
				url: ''
			}, {
				text: 'this is a text blob3',
				url: ''
			}]
		}, {
			name: 'Education',
			stance: 'Increase public funding',
			citations: [{
				text: 'this is a text blob1',
				url: ''
			}, {
				text: 'this is a text blob2',
				url: ''
			}, {
				text: 'this is a text blob3',
				url: ''
			}]
		}],
		furtherCitations: [{
			text: 'Bernie Sanders is a pimp',
			url: ''
		}, {
			text: 'Bernie Sanders',
			url: ''
		}, {
			text: 'Feel the Bern',
			url: ''
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
			citations: [''] //urls
		},
		{
			name: 'Gun Rights',
			stance: 'Pro Gun Rights',
			citations: [''] //urls
		}],
		furtherCitations: [''] //urls
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
		furtherCitations: [''] //urls
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
		furtherCitations: [''] //urls
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
