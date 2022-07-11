 class Nav{
    render(){
        return(
            `  <!-- nav start -->
            <nav>
                <ul class="main_nav">
                    <li><a class="before" href="#">Home</a></li>
                    <li><a class="before" href="#">About Us</a></li>
                    <li class="dropDown"><a class="before" href="#">Other Projects
                            <i class="fa-solid fa-angle-down icn"></i>
                        </a>
                        <ul class="drop">
                            <li> <a href="">About</a></li>
                            <li> <a href="">for</a></li>
                            <li> <a href="">ehmed</a></li>

                        </ul>
                    </li>

                </ul>
                <button>Enquire Now</button>

            </nav>
            <!-- nav End -->
        </div>`
        )
    }
 }
 export default new Nav()