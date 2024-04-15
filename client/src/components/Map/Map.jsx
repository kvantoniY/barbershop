import React from "react";
import style from './Map.module.css'

const Map = () => {
  return (
    <section className={style.map_container} id='contacts'>
    <div className='container'>
      <div className={style.map_block}>
        <h1>Мы на карте</h1>
        <div>ул. Баумана 20</div>
        <iframe width="1280" height="720" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1280&amp;height=720&amp;hl=en&amp;q=%D0%91%D0%B0%D1%83%D0%BC%D0%B0%D0%BD%D0%B0%2020%20Ekaterinburg+(Barbershop)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/ru'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=33cfa744b31d38c8e322939dd6f0811f0be0ac20'></script>
      </div>
    </div>

    </section>
    

    
  );
};

export default Map;
