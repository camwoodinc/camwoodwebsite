import React from 'react';
import insightsBg from '../assets/images/Insightbg.jpeg';
import { Link } from 'react-router-dom';
import AutofixLogo from '../assets/images/Autofix_logo.png'
import AIimg from '../assets/images/InsightIMG.webp'
import RLlogo from '../assets/images/RL-logo.png'

const Insights = () => (
  <div className="section-wrapper">
    <img src={insightsBg} alt="" id="insights-bg" className="section-bg" />
    <section id="insights">
      <div className="container">
        <div className="section__head">
          <h2 className="h2">Insights</h2>
        </div>
        <div className="posts">
          <article className="card product">
  <div className="meta">
    <div className='description'><img height="70px" src={AutofixLogo} alt="Rhaid Autofix Logo" /><div className='text'><h3>Rhaid Autofix</h3>
  <p>Product • Available</p></div></div>
  <hr></hr>
  <p>Rhaid Autofix by Camwood Inc. automatically cleans and fixes codebases. It's a secure, CI-native tool that corrects imports and keeps your repositories clean without your code ever leaving your environment.</p></div>
  <hr></hr>
  <div className="store-links">Install Rhaid Autofix:
    <a href="https://github.com/marketplace/actions/rhaid-autofix" target="_blank" rel="noopener noreferrer"><svg width="32px" height="32px" viewBox="-25.6 -25.6 307.20 307.20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g fill="#f85601"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg></a>
    <a href="https://pypi.org/project/rhaid-autofix/" target="_blank" rel="noopener noreferrer"><svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.896 18.104v5.219l-4.495 1.636-0.104 0.072 0.067 0.052 4.6-1.676 0.036-0.047v-5.329l-0.073-0.047zM31.495 7.489l-4.052 1.48v5.213l4.453-1.62v-5.219zM31.896 17.943v-5.219l-4.448 1.62v5.219zM27.292 19.615v-5.213l-4.396 1.599v5.219zM22.713 26.661v-5.213l-4.416 1.604v5.219zM22.896 21.412v5.156l4.416-1.609v-5.156l-4.416 1.604zM25.683 23.917c-0.489 0.181-0.88-0.1-0.88-0.615 0-0.521 0.391-1.089 0.88-1.267 0.489-0.176 0.885 0.104 0.885 0.62 0 0.521-0.396 1.089-0.885 1.261zM17.636 12.421l0.484-0.176-4.38-1.6-4.433 1.615 0.141 0.052 4.245 1.548zM27.344 14.219v-5.219l-4.448 1.62v5.219zM22.745 15.891v-5.219l-4.401 1.604v5.213zM18.193 12.328l-4.448 1.62v5.219l4.448-1.62zM9.208 17.552l4.432 1.615v-5.219l-4.432-1.609zM13.787 10.495l4.375 1.593v-5.156l-4.375-1.593zM27.344 3.62l-4.423 1.609v5.219l4.423-1.609zM22.599 5.203l-4.301-1.563-4.36 1.589 4.303 1.563zM20.484 6.14l-2.161 0.792v5.156l4.423-1.609v-5.156zM19.964 9.844c-0.491 0.183-0.881-0.099-0.881-0.615 0-0.521 0.391-1.089 0.881-1.265 0.489-0.177 0.885 0.099 0.885 0.62 0 0.52-0.396 1.083-0.885 1.26zM13.64 24.547v-5.219l-4.432-1.615v5.219zM18.24 22.912v-5.219l-4.495 1.635v5.219zM18.344 22.869l4.396-1.599v-5.219l-4.396 1.599zM18.24 28.292l-4.495 1.635v-5.219h-0.105v5.219l-4.432-1.615v-5.219l-0.068-0.072-0.036-0.084-4.448-1.615v-5.26l0.047 0.016 4.38 1.593 0.021-0.104-4.349-1.584 4.349-1.577v-0.147l-4.344-1.583 4.344-1.584v1.167l0.104-0.072v-3.161l4.344 1.577 0.079-0.077-4.183-1.527-0.141-0.047 4.324-1.573v-0.115l-4.491 1.636v0.025l-0.036 0.027v2.025l-4.516 1.647v0.025l-0.036 0.027v5.344l-4.521 1.64v0.027l-0.031 0.025v5.323l0.031 0.052 4.537 1.652 0.011-0.011 0.009 0.016 4.532 1.651 0.011-0.011 0.009 0.016 4.532 1.645 0.021-0.011 0.015 0.011 4.599-1.672 0.037-0.052zM4.656 12.749l4.344 1.579-4.344 1.584zM4.531 26.615l-4.427-1.609v-5.219l4.427 1.609zM4.552 21.292l-4.349-1.579 4.349-1.583v3.167zM9.083 28.265l-4.427-1.609v-5.219l4.427 1.615zM31.719 7.245l-4.276-1.557v3.115zM27.183 3.527l-4.319-1.573-4.359 1.583 4.328 1.579z"></path> </g></svg></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=CamwoodInc.rhaid-vscode" target="_blank" rel="noopener noreferrer"><svg width="32px" height="32px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>visual_studio [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -7519.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M373.999488,7368.989 L378.758614,7365.514 L378.760661,7372.491 L373.999488,7368.989 Z M366.382635,7371.095 L366.379563,7366.915 L368.761173,7368.991 L366.382635,7371.095 Z M383.998976,7360.865 L379.233707,7359 L370.915476,7366.911 L365.906517,7363.187 L364.002048,7364.123 L364,7373.888 L365.896278,7374.817 L370.901142,7371.096 L379.238827,7379 L384,7377.142 L383.998976,7360.865 Z" id="visual_studio-[#ffffff]"> </path> </g> </g> </g> </g></svg></a>
  </div>
</article>
          <article className="card post"><Link to="/Insights">
            <div className="meta">Article • 5 min read</div>
            <h3>Essays from the Camwood team</h3>
            <p>AI at Camwood: Turning Data into Direction</p>
            <img src={AIimg} alt="" /></Link>
          </article>
          <article className="card post">
            <div className="meta">Coming Soon</div>
            <h3>Rhaid Liftoff</h3>
            <img src={RLlogo} height="250px" alt="Rhaid Liftoff logo" />
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default Insights;