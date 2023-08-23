export type Bupati = {
    id: number;
    name: string;
    period: {
        from: number;
        to: number;
    },
    url: string;
	color: string;
}
const images: Bupati[] = [
	{
		id: 1,
		name: 'H. Mohamad Kaya Nataprawira',
		period: {
            from: 1971,
            to: 1982
        },
        url: 'https://sapulidi.site/images/dprd/kaya-nata-prawira.jpg',
		color: '#14121a',
	},
	{
		id: 2,
		name: 'H. Adang Suryana',
		period: {
            from: 1982,
            to: 1985
        },
        url: 'https://sapulidi.site/images/dprd/adang-suryana.jpg',
		color: '#41929b',
	},
	{
		id: 3,
		name: 'H. Maksudi',
		period: {
            from: 1987,
            to: 1992
		},
        url: 'https://sapulidi.site/images/dprd/maksudi.jpg',
		color: '#401c43',
	},
	{
		id: 4,
		name: 'H. Tarlan Effendi',
		period: {
            from: 1992,
            to: 1997
		},
        url: 'https://sapulidi.site/images/dprd/tarlan.jpg',
		color: '#115a98',
	},
	{
		id: 5,
		name: 'H. Moeljono Marsaid',
		period: {
            from: 1977,
            to: 1999
		},
        url: 'https://sapulidi.site/images/dprd/muljono-marsaid.jpg',
		color: '#25659b',
	},
	{
		id: 6,
		name: 'Iwan Hendrawan',
		period: {
            from: 1999,
            to: 2004
		},
        url: 'https://sapulidi.site/images/dprd/iwan-hendrawan.jpg',
		color: '#1b1860',
	},
	{
		id: 7,
		name: 'H. M. Hasyim Djunaedi, S.Ag., MBA',
		period: {
            from: 2004,
            to: 2009
		},
        url: 'https://sapulidi.site/images/dprd/hasyim%20junaedi.jpg',
		color: '#438f9c',
	},
	{
		id: 8,
		name: 'Drs. H. A. Rozaq Muslim, M.Si',
		period: {
            from: 2009,
            to: 2014
		},
        url: 'https://sapulidi.site/images/dprd/rozaq-mulim.jpg',
		color: '#43918b'
	},
	{
		id: 9,
		name: 'H. Taufik Hidayat, S.H., M.Si',
		period: {
            from: 2014,
            to: 2019
		},
        url: 'https://sapulidi.site/images/dprd/taufik-hidayat.jpg',
		color: '#9bd5c2',
	},
	{
		id: 10,
		name: 'H. Syaefudin, S.H.',
		period: {
            from: 2019,
            to: 2024
		},
        url: 'https://sapulidi.site/images/dprd/syaefudin.jpg',
		color: '#361519',
	},
	{
		id: 11,
		name: 'Mastur',
		period: {
            from: 2024,
            to: 2029
		},
        url: 'https://sapulidi.site/images/dprd/mastur.jpg',
		color: '#073e5c',
	}
];

export default images;