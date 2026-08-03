import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"

const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start:'bottom top'
            }
        });
        navTween.fromTo(
            'nav',
            {backgroundColor: 'transparent'},
            {backgroundColor: '#00000050', backgroundFilter: 'blur(10px)', duration:1 , ease: 'power.inOut'}
        )
    })

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789302/logo_hg9xo8.png" alt="logo"/>
                <p>Cool Breeze</p>
            </a>

            <ul>
                {navLinks.map((link) =>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>

                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar