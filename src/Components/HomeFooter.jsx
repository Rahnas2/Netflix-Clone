
import Button from "./Button"

function HomeFooter() {
    return (
        <footer className="bg-black text-[rgba(255,255,255,0.7)] font-nsans-light sm:pr-72 pt-24 pb-10">
            <div className="flex  flex-col text-base">
                <div className="mb-5">
                    Questions? Call
                    <span className="cursor-pointer">000-800-919-1743</span>
                </div>
                <div className="flex justify-between mb-6 underline [&>ul>li]:cursor-pointer">
                    <ul>
                        <li className="mb-6">FAQ</li>
                        <li className="mb-6">Investor Relations</li>
                        <li className="mb-6">Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li className="mb-6">Help Centre</li>
                        <li className="mb-6">Jobs</li>
                        <li className="mb-6">Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul>
                        <li className="mb-6">Account</li>
                        <li className="mb-6">Ways to Watch</li>
                        <li className="mb-6">Corporate Information</li>
                        <li className="mb-6">Only of Netflix</li>
                    </ul>
                    <ul>
                        <li className="mb-6">Media Center</li>
                        <li className="mb-6">Terms of Use</li>
                        <li className="mb-6">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <Button type="Language" text="English" className="mt-2" />
                </div>
                <div className="mt-10">Netflix India</div>
            </div>
        </footer>
    )
}

export default HomeFooter