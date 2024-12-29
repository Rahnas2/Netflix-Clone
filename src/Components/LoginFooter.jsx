
import Button from "./Button"

function LoginFooter() {
    
  return (
    <footer className="bg-black text-[rgba(255,255,255,0.7)] font-nsans-light pl-28 pr-72 pt-48 pb-20">
        <div className="flex flex-col text-base">
            <div className="mb-5">
                Questions? Call
                <a href="#">000-800-919-1743</a>
            </div>
            <div className="flex justify-between mb-6 underline [&>ul>li]:cursor-pointer">
                <ul>
                    <li className="mb-6">FAQ</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li className="mb-6">Help Centre</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    <li>Terms of Use</li>
                </ul>
                <ul>
                    <li>Privacy</li>
                </ul>
            </div>
            <div>
                <Button type="Language" text="English" className="mt-2"/>
            </div>
        </div>
    </footer>
  )
}

export default LoginFooter