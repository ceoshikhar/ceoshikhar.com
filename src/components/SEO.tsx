import { Helmet } from "react-helmet";

export interface ISEOProps {
    pathname: string;
    article?: boolean;
    description?: string;
    title?: string;
}

export const SEO: React.FC<ISEOProps> = (props) => {
    const color = "#0A0A0A",
        defaultDescription = `My name is Shikhar Sharma, also known as "ceoshikhar" on the internet. I am an entrepreneur, developer and sometimes an artist. Welcome to my small space on the internet.`,
        defaultTitle = "Shikhar Sharma's small space on the internet",
        language = "en",
        site = "ceoshikhar",
        siteUrl = "https://ceoshikhar.com",
        titleTemplate = "%s - ceoshikhar",
        author = "Shikhar Sharma";

    const { article, description, pathname, title } = props;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: new URL("./images/thumbnail.png", import.meta.url).href,
        url: `${siteUrl}${pathname}`,
        author,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate} defer={false}>
            <html lang={language} />

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="author" content={seo.author} />
            <meta
                name="keywords"
                content="Shikhar Sharma, Shikhar, Sharma, CEOShikhar"
            />
            <meta name="theme-color" content={color} />
            <meta name="application-name" content={site} />
            <link rel="canonical" href={seo.url} />

            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content={`website`} />
            {article && <meta property="og:type" content="article" />}

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={site} />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={seo.author} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};
