import styled from "styled-components";
import Link from 'next/link';

export default function SiteHeader() {
    return (
        <Header>
            <Image
              priority
              src="/images/5199Icon.png"
              height={144}
              width={144}
              alt=""
            />
            <h1 id="SiteTitle">5199 Strategy</h1>
            <Link href="/" className="pageLink">Matches</Link>
            <Link href="/stats" className="pageLink">Stats</Link>
            <Link href="/bonus" className="pageLink">Bonus</Link>
            <h1></h1>
        </Header>
    )
}

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.25fr 1fr 1fr 1fr 0.5fr;
    grid-auto-flow: row;
    color: white;
    background-color: blue;
    position: sticky;
    top: 0;
    place-items: center;
    justify-items: center;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    
    h1 {
        padding-top: 2vh;
        padding-bottom: 2vh;
        font-size: largest;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .pageLink {
        color: white;
        font-size: 1.5em;
    }

    @media (max-width: 540px){
        font-size: 0.75em;
    }

    @media (max-width: 415px) {
        display: flex;
        justify-content: space-around;
        font-size: 0.75em;

        #SiteTitle{
            // display: none;
        }
    }

    @media (max-width: 280px){
        display: flex;
        justify-content: space-around;
        #SiteTitle{
            display: none;
        }
    }
`

const Image = styled.img`
    object-fit: fill;
    max-height: 12vh;
    max-width: 12vh;

    @media (max-width: 415px) {
        display: none;
      }
`
