import Link from "next/link";

export default function App({Component, pageProps}) {
    return (
        <div >
            <h1>The Movie DB</h1>
            <Link href="/">
                <a id="maina">개봉 예정 영화</a>
            </Link>
            <Link href="/latest">
                <a id="maina">최고 순위 영화</a>
            </Link>
            <Link href="/popular">
                <a id="maina">인기 영화</a>
            </Link>
            <Link href="/now">
                <a id="maina">현재 상영작</a>
            </Link>
            <hr />
            <Component {...pageProps} />
            <style jsx global>{`
            h1 {
                color : black;
                text-align : center;
            }
            a {
                text-align : center ;
                color : white ;
                margin : 2rem;
                text-decoration : none;
                background-color : black;
            }
            a:hover{
                text-align : center ;
                margin : 2rem;
                text-decoration : none;
                background-color : white;
                color : black;
            }
            div {
                text-align : center;
            }
            #maina {
                color : black;
                background-color : white ;
                font-size : 18px;
                font-weight : bold ;
            }
            #maina:hover {
                color : blue ;
            }

            img {
                border-radius : 5px;
                opacity : 1.0 ;
                width : 280px;
                height : 350px;
            }
            `}</style>
            
        </div>
    )
}