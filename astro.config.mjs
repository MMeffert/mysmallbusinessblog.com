import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mysmallbusinessblog.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
  redirects: {
    // Old WordPress URL paths → new blog paths
    '/2011/04/dropbox/': '/blog/dropbox/',
    '/2011/04/rimuhosting/': '/blog/rimuhosting/',
    '/2011/04/taskfreak/': '/blog/taskfreak/',
    '/2011/05/taskfreak-alternative-uses/': '/blog/taskfreak-alternative-uses/',
    '/2011/05/customer-bandwidth-usage-graphing/': '/blog/customer-bandwidth-usage-graphing/',
    '/2011/05/bandwidth-usage-graphing-part-2-webalizer/': '/blog/bandwidth-usage-graphing-part-2-webalizer/',
    '/2011/09/technology-difficulties-for-small-business/': '/blog/technology-difficulties-for-small-business/',
    '/2011/09/technological-difficulties-for-small-business-accounting/': '/blog/technological-difficulties-for-small-business-accounting/',
    '/2011/10/technological-difficulties-for-small-business-backups/': '/blog/technological-difficulties-for-small-business-backups/',
    '/2011/12/technological-difficulties-for-small-business-software/': '/blog/technological-difficulties-for-small-business-software/',
    '/2011/12/rimuhosting-price-variations/': '/blog/rimuhosting-price-variations/',
    '/2012/02/what-is-bitcoin/': '/blog/what-is-bitcoin/',
    '/2012/02/getting-started-with-paxum/': '/blog/getting-started-with-paxum/',
    '/2012/02/bitcoin-investing-fees-to-get-started/': '/blog/bitcoin-investing-fees-to-get-started/',
    '/2012/02/bitcoin-gambling-minefield/': '/blog/bitcoin-gambling-minefield/',
    '/2012/07/zfs-file-server-purchase/': '/blog/zfs-file-server-purchase/',
    '/2012/07/zfs-file-server-memory-problems/': '/blog/zfs-file-server-memory-problems/',
    '/2012/07/zfs-file-server-harddrive-upgrade/': '/blog/zfs-file-server-harddrive-upgrade/',
    '/2012/07/pfsense-what-it-is/': '/blog/pfsense-what-it-is/',
    '/2012/07/pfsense-installation/': '/blog/pfsense-installation/',
    '/2012/07/pfsense-router/': '/blog/pfsense-router/',
    '/2012/11/zfs-file-server-first-hard-drive-failure/': '/blog/zfs-file-server-first-hard-drive-failure/',
    '/2013/08/pfsense-installation-watchguard-x750e/': '/blog/pfsense-installation-watchguard-x750e/',
    '/2013/08/outgrown-poweredge-2950-fileserver/': '/blog/outgrown-poweredge-2950-fileserver/',
    '/2013/11/cisco-sg300-28p-for-homelab-use/': '/blog/cisco-sg300-28p-for-homelab-use/',
    '/2013/11/supermicro-storage-server/': '/blog/supermicro-storage-server/',
    '/2014/05/getting-started-with-pfsense-aliases/': '/blog/getting-started-with-pfsense-aliases/',
    '/2014/10/2008-imac-upgrade-to-ssd/': '/blog/2008-imac-upgrade-to-ssd/',
    // Old RSS feed URL
    '/feed/': '/rss.xml',
  },
});
