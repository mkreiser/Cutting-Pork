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
	}
});
