import Link from "next/link";

export default function App({Component, pageProps}) {
    return (
        <div>
            <h1>메인 홈페이지 화면</h1>
            <Link href="/">
                <a>개봉 예정 영화</a>
            </Link>
            <Link href="/latest">
                <a>최고 순위 영화</a>
            </Link>
            <Link href="/popular">
                <a>인기 영화</a>
            </Link>
            <Link href="/now">
                <a>현재 상영작</a>
            </Link>
            <Component {...pageProps} />
            <style jsx global>{`
            h1 {
                color : white ;
                text-align : center;
                background-color : black;
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
                color : blue ;
                margin : 2rem;
                text-decoration : none;
                background-color : white;
            }
            a:focus{
                text-align : center ;
                color : blue ;
                margin : 2rem;
                text-decoration : none;
                background-color : white;
            }
            div {
                text-align : center;
            }

            img {
                border-radius : 5px;
                opacity : 0.8 ;
            }
            img:hover {
                border-radius : 5px;
                opacity : 1.0 ;
            }
            `}</style>
            
        </div>
    )
}