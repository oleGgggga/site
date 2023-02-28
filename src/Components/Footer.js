import React from "react";
function Footer(){
    
    return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_body">
            <div className="footer_left">
                <h2 className="footer_logo hdr">logo</h2>
                <p className="footer_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis delectus nostrum repellat! Nostrum, optio!</p>
                <div className="footer_contacts">
                    <div className="iw">
                <svg aria-hidden="true" role="img" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x">
	<path fill="white" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
</svg>
    
                    <a href="#" className="footer_icon_location">Belarus.Minsk</a></div>
                    <div className="iw">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4307 11.0668L10.9152 11.8401C10.8123 11.9944 10.6762 12.1261 10.4969 12.1735C9.90946 12.3287 8.3499 12.3988 5.9755 10.0244C3.60111 7.65004 3.67119 6.09046 3.82641 5.50302C3.8738 5.32368 4.00549 5.1876 4.15983 5.0847L4.93308 4.5692C5.50878 4.1854 5.66435 3.40757 5.28055 2.83187L3.82014 0.64126C3.48514 0.138762 2.83933 -0.0532187 2.28423 0.18468L1.62544 0.467021C1.12498 0.681503 0.716742 1.06643 0.47324 1.55343C0.269804 1.96031 0.112126 2.38877 0.0907621 2.84317C0.0234363 4.27515 0.337433 7.80312 4.26713 11.7328C8.19682 15.6625 11.7248 15.9765 13.1568 15.9092C13.6111 15.8878 14.0396 15.7301 14.4465 15.5267C14.9335 15.2832 15.3184 14.8749 15.5329 14.3745L15.8152 13.7157C16.0531 13.1606 15.8612 12.5148 15.3587 12.1798L13.168 10.7194C12.5923 10.3356 11.8145 10.4911 11.4307 11.0668Z" fill="white"/>
</svg>
                    <a href="tel:+375293430316" className="footer_icon_phone">+375(29)3430316</a></div>
                </div>
            </div>
            <div className="footer_link">
                <h2 className="footer_link hdr"> stay conected </h2>
                <a href="https://www.instagram.com/">instagram</a>
                <a href="https://www.facebook.com/">facebook</a>
                <a href="https://twitter.com/?lang=ru">twitter</a>
            </div>
            <div className="footer_right">
                <h2 className="footer_subscribe hdr"> stay updated</h2>
                <form className="footer_subscribe" onSubmit={(eo)=>{
                    eo.preventDefault();
                    eo.target[0].value='';
                }}>
                    <input  className="footer_input" type="email" placeholder="enter your email" required></input>
                    <button className="footer_subscribe_btn" type="submit">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7825 0.217449C17.6813 0.116704 17.5534 0.046952 17.4139 0.0163941C17.2744 -0.0141638 17.1291 -0.00425714 16.995 0.0449493L0.495001 6.04495C0.352702 6.09892 0.230191 6.19491 0.143739 6.32016C0.0572872 6.44542 0.0109863 6.59401 0.0109863 6.7462C0.0109863 6.89839 0.0572872 7.04698 0.143739 7.17223C0.230191 7.29749 0.352702 7.39348 0.495001 7.44745L6.9375 10.0199L11.6925 5.24995L12.75 6.30745L7.9725 11.0849L10.5525 17.5275C10.6081 17.667 10.7043 17.7866 10.8286 17.8709C10.953 17.9551 11.0998 18.0001 11.25 17.9999C11.4016 17.9968 11.5486 17.9479 11.6718 17.8595C11.795 17.7711 11.8885 17.6475 11.94 17.5049L17.94 1.00495C17.9911 0.872257 18.0034 0.727772 17.9755 0.588342C17.9477 0.448912 17.8807 0.320282 17.7825 0.217449Z" fill="white"/>
</svg>
                    </button>
                </form>
       
            </div>
        </div>
      </div>
    </footer>
    )
  }
  
  export default React.memo(Footer);