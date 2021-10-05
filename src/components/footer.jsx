import React from 'react';
import '../styles/footer.css'

function Footer(){
    return(
    <footer>
        <div className="footer-text">
            <p>Questions? Call +1 (408) 600-1722 (USA)</p>
        </div>
        <div className="footer-table flex-wrap">
            <table className="flex-wrap">
            <tr className="sm:flex flex-wrap">
                <td>FAQ</td>
                <td>Help Center</td>
                <td>Account</td>
                <td>Media Center</td>
            </tr>
            <tr className="sm:flex flex-wrap">
                <td>Privacy</td>
                <td>Jobs</td>
                <td>Ways to Watch</td>
                <td>Terms of Use</td>
            </tr>
            <tr className="sm:flex flex-wrap">
                <td>Speed Test</td>
                <td>Cookie Preferences</td>
                <td>Corporate Information</td>
                <td>Contact Us</td>
            </tr>
            </table>
        </div>
    </footer>
    )
}

export default Footer;
