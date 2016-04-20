'use strict';

angular.module('cuttingPorkApp')

.constant('CANDIDATES', {
	'Bernie Sanders': {
		name: 'Bernie Sanders',
		image: 'images/candidates/Bernie Sanders/Bernie_Sanders.jpg',
		currentOffice: 'U.S. Senator from Vermont',
		previousOffices: ['U.S. Representative, Vermont\'s at-large district', 'Mayor of Burlington, Vermont'],
		party: 'Democratic Party',
		age: 74,
		website: 'https://berniesanders.com/',
		facebook: 'https://www.facebook.com/berniesanders/',
		twitter: 'https://twitter.com/SenSanders',
		media: ['images/candidates/Bernie Sanders/media1.jpg'], //urls
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
	'Hilary Clinton': {
		name: 'Hilary Clinton',
		image: 'images/candidates/Hilary Clinton/Hilary Clinton.jpg',
		currentOffice: 'Private Citizen (Businessman)',
		previousOffices: ['No public offices held'],
		party: 'Republican Party',
		age: 69,
		website: 'https://www.donaldjtrump.com/',
		facebook: 'https://www.facebook.com/DonaldTrump/',
		twitter: 'https://twitter.com/realDonaldTrump',
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
	'Ted Cruz': {
		name: 'Rafael Edward \"Ted\" Cruz',
		image: 'images/candidates/Ted Cruz/Ted Cruz.jpg',
		currentOffice: 'Private Citizen (Businessman)',
		previousOffices: ['No public offices held'],
		party: 'Republican Party',
		age: 69,
		website: 'https://www.donaldjtrump.com/',
		facebook: 'https://www.facebook.com/DonaldTrump/',
		twitter: 'https://twitter.com/realDonaldTrump',
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
	}
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
