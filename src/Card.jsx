import React from 'react';
import styles from './Card.module.css';

export const Card = () => {
    const Bikename = [
        { 
          name: 'Ducati', 
          description: 'Ducati is an Italian brand known for its high-performance motorcycles. It is famous for its superbikes like the Panigale and Monster series.',
          image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/129581/panigale-v4-right-side-view-16.png?isig=0&q=80'
        },
        { 
          name: 'Honda', 
          description: 'Honda produces a wide range of motorcycles, from commuter bikes to high-performance sports bikes. The CBR series is one of their most popular models.',
          image: 'https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2FBajaj_Avenger_Street_220_1_2_9c128cd25d.png%3Fformat%3Dwebp&w=1920&q=75'
        },
        { 
          name: 'Yamaha', 
          description: 'Yamaha is another well-known motorcycle brand. They are known for the R1 and MT series, offering a variety of motorcycles from street bikes to off-roaders.',
          image: 'https://gaadiwaadi.com/wp-content/uploads/2021/05/yamaha-RX100-1-1.jpg'
        },
        { 
          name: 'Kawasaki', 
          description: 'Kawasaki offers a broad range of motorcycles, from dirt bikes to street bikes, with the Ninja series being particularly famous in the sports bike category.',
          image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/95229/ninja-h2r-right-side-view-2.png?isig=0&q=80'
        },
        { 
          name: 'BMW', 
          description: 'BMW motorcycles are known for their luxury, performance, and engineering excellence. The S1000RR is one of their iconic sportbikes.',
          image: 'https://img.etimg.com/thumb/msid-75572296,width-640,height-480,imgsize-507941,resizemode-4/bmw-ninet.jpg'
        },
        { 
          name: 'Suzuki', 
          description: 'Suzuki is a Japanese manufacturer known for both street and off-road motorcycles. Popular models include the GSX-R and V-Strom.',
          image: 'https://c8.alamy.com/comp/W2CT3G/lviv-ukraine-12-may-2019-orange-suzuki-bike-stands-on-road-parked-motorbike-on-sidewalk-W2CT3G.jpg'
        },
        { 
          name: 'Triumph', 
          description: 'Triumph is a British brand famous for its cafe racers, cruisers, and modern classics. The Bonneville and Tiger are some of their iconic models.',
          image: 'https://stat.overdrive.in/wp-content/odgallery/2018/12/49136_TriumphBobber-022_468x263.jpg'
        },
        { 
          name: 'Harley-Davidson', 
          description: 'Harley-Davidson is an iconic American brand known for its heavy cruisers. The Fat Boy and Road King are popular models.',
          image: 'https://stat.overdrive.in/wp-content/odgallery/2017/10/39031_harley_davidson_fat_bob_3_468x263.jpg'
        },
        { 
          name: 'KTM', 
          description: 'KTM is an Austrian brand known for its high-performance dirt bikes and street motorcycles like the Duke and RC series.',
          image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/129743/duke-200-right-front-three-quarter.jpeg?isig=0&q=80'
        },
        { 
          name: 'Indian', 
          description: 'Indian Motorcycles is an American manufacturer of cruiser bikes. The Chief and Scout models are highly regarded.',
          image: 'https://media.zigcdn.com/media/model/2020/Oct/indian-scout-bobber-twenty-right-side-view_360x240.jpg'
        },
        { 
          name: 'Aprilia', 
          description: 'Aprilia is an Italian brand known for its racing bikes and sport motorcycles like the RSV4 and Tuono.',
          image: 'https://images.moneycontrol.com/static-mcnews/2020/10/Aprilia-RS660.jpg?impolicy=website&width=1600&height=900'
        },
        { 
          name: 'Moto Guzzi', 
          description: 'Moto Guzzi is an Italian manufacturer known for its iconic V-twin engine motorcycles, including the California and V7 models.',
          image: 'https://images.piaggio.com/motoguzzi/vehicles/gu9032260eum00/gu9032260eum01/gu9032260eum01-01-s.png'
        },
        { 
          name: 'Benelli', 
          description: 'Benelli is an Italian motorcycle brand with a rich history, offering a wide range of motorcycles from street to dirt bikes.',
          image: 'https://imgd.aeplcdn.com/476x268/bw/models/benelli-tnt-1130-standard-782.jpg?20190103151915'
        },
        { 
          name: 'Royal Enfield', 
          description: 'Royal Enfield is known for its retro-styled motorcycles, including the Classic 350 and the Bullet.',
          image: 'https://images.unsplash.com/photo-1694956792421-e946fff94564?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm95YWwlMjBlbmZpZWxkJTIwYnVsbGV0fGVufDB8fDB8fHww'
        },
  ];

  return (
    <div className={styles.cardContainer}>
      {Bikename.map((item,items) => (
        
        <div key={items} className={styles.main}>
          <div className={styles.container}>
            <div className={styles.photo}>
              <img src={item.image} alt={item.name} className={styles.bikeImage} />
             </div>
            <h3>{item.name}</h3>
            <p className={styles.text}>{item.description}</p>
            <button  className={styles.btn}>Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;





