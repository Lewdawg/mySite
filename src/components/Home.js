import logo from '../img/linkin.png'


const Home = () => {

    return (

        <>
            <div className="home">

                <div >
                    <img src={logo} alt="" className="imgMe" />
                </div>

                {/* ******** Divider split ********** */}

                <div className="about">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet. Gravida cum sociis natoque penatibus. Tempus quam pellentesque nec nam aliquam sem. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Sit amet dictum sit amet justo donec. Tellus integer feugiat scelerisque varius. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Lorem ipsum dolor sit amet. Morbi blandit cursus risus at. Donec et odio pellentesque diam volutpat commodo sed. Amet volutpat consequat mauris nunc. Turpis massa tincidunt dui ut ornare. Dictumst quisque sagittis purus sit amet. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Ultrices vitae auctor eu augue ut. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Proin libero nunc consequat interdum varius sit amet mattis vulputate.</p>
                </div>

            </div>

            {/*********************************  New Section ************************************/}

            <div className="projects">

                <div className="skills">
                    <h1>skills</h1>
                </div>

                {/* ******** Divider split ********** */}

                <div className="proj">
                    <h1>Completed projects</h1>
                </div>

            </div>

            {/*********************************  New Section ************************************/}

            <div className="contact">

                <div>
                    <h3>Mobile</h3>
                    <h3>Email</h3>
                    <h3>Fax</h3>
                </div>
            </div>



        </>
    );
}

export default Home;