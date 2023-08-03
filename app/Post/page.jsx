import { Navigation } from "../components/Navigation"
import { Table } from "./Table"



const Post = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Navigation />
                <Table/>
            </div>
        </main>
    )
}

export default Post


