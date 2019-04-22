function template(eventData) {
    return `<div style="width: 100%; padding: 0;margin: 20px 0 0; display: flex; justify-content: center; ">
    <div style="width: 50%;">
        <div style="padding: 3px 10px;box-shadow: 0 0 19px 0 rgba(0,0,0,.21);">
            <ul style="list-style: none;display: flex;flex-direction: row;flex-wrap: wrap;line-height: 30px;">
                <li style="color: #191919;font-size: 20px;font-weight: bold;margin: 0 25px 0 0;font-family: monospace, sans-serif;">
                    Jon Doe
                </li>
                <li style="font-size: 18px;font-weight: 700;color: #191919;font-family: monospace, sans-serif;">
                    Event name
                </li>
                <li style="color: #191919;font-style: oblique; margin:0  25px 0 auto;font-size: 18px;">
                    Sat Apr 20 2019 13:02:14
                </li>
                <li style="color: #191919;font-style: oblique;margin-right: 35px;font-size: 16px;">
                    Schoenebergerstrasse 85, Neuenkirchen
                </li>
                <li style="color: #989898;font-family: 'Arial', sans-serif;letter-spacing: 0.5px;font-size: 18px;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aspernatur atque beatae
                    delectus dolorem, eaque fuga ipsa necessitatibus sit. Ducimus harum ipsam laboriosam libero molestias nostrum
                    recusandae sint velit.
                </li>
                <li style="color: #191919;font-size: 18px;">
                    Visit our site 
                    <a href="#" style=" text-decoration:  none;color: #089e70;">
                        link to event
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>`;
}

module.exports = template;