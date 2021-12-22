import Header from "../../components/Header"
import Posts from "../../components/Posts"
import Secpost from "../../components/Secpost"

export default function Home() {
    return (
        <>
        <div>
            <Header/>
            <div className="home">
                <Posts/>
                <Secpost/>
            </div>
        </div>
        </>
    )
}
