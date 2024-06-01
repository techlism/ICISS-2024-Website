import React from 'react';

const destinations = [
    {
        name: 'Victoria Memorial',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Victoria-Memorial-Kolkata-India.jpg',
        description: 'The Victoria Memorial is a large marble building in Kolkata, West Bengal, India. It is dedicated to the memory of Queen Victoria and is now a museum and tourist destination. It is known for its stunning architecture and beautiful gardens.',
    },
    {
        name: 'Indian Museum',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Indian_Museum%2C_Courtyard%2C_Kolkata%2C_India.jpg',
        description: 'The Indian Museum is the largest and oldest museum in India. It has a vast collection of artifacts, including sculptures, paintings, and archaeological finds. It is a treasure trove of Indian history and culture.',
    },
    {
        name: 'Kalighat',
        image: 'https://www.trawell.in/admin/images/upload/555418767Kolkata_Kalighat_Temple_Main.jpg',
        description: 'Kalighat is a famous Hindu temple dedicated to the goddess Kali. It is one of the 51 Shakti Peethas and holds great religious significance. Devotees from all over the world visit this temple to seek blessings.',
    },
    {
        name: 'Dakshineswar Kali Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG',
        description: 'Dakshineswar Kali Temple is a renowned Hindu temple located on the eastern bank of the Hooghly River. It is dedicated to Goddess Kali and is known for its beautiful architecture and spiritual ambiance.',
    },
    {
        name: "St. Paul's Cathedral",
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/St_Paul%27s_Cathedral.jpg',
        description: "St. Paul's Cathedral is a magnificent Anglican cathedral in Kolkata. It is one of the iconic landmarks of the city and showcases Gothic architecture. The cathedral is known for its serene atmosphere and beautiful stained glass windows.",
    },
    {
        name: 'Tipu Sultan Mosque',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Tipu_Sultan_Mosque_Dharmatala_at_Night.jpg',
        description: 'Tipu Sultan Mosque is a historic mosque located in Kolkata. It was built in memory of Tipu Sultan, the ruler of Mysore. The mosque is known for its intricate architecture and peaceful ambiance.',
    },
    {
        name: 'Jorasanko Thakur Bari',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/08/56/a8/jorasanko-thakur-bari.jpg?w=1600&h=-1&s=1',
        description: 'Jorasanko Thakur Bari is the ancestral home of the Tagore family, including the famous poet Rabindranath Tagore. It is now a museum showcasing the life and works of Rabindranath Tagore. The place holds immense cultural and literary significance.',
    },
    {
        name: 'Belur Math',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Belur_Math%2C_Howrah.jpg',
        description: 'Belur Math is a spiritual retreat and headquarters of the Ramakrishna Math and Ramakrishna Mission. It is located on the banks of the Hooghly River and is known for its serene environment and architectural beauty.',
    },
    // Add more destinations here
];

export default function TouristDestinationPage() {
    return (
        <div style={{display:'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
            <h1 style={{color:'#EDEEF7', fontFamily:"'Poppins', sans-serif", textAlign:'center', fontWeight : 'bold', marginBottom : '20px'}}>Explore Kolkata's Top Tourist Destinations</h1>
            {destinations.map((destination) => (        
                <div key={destination.name} style={{color:'#EDEEF7', fontFamily:"'Poppins', sans-serif", maxWidth : '60%' , padding : '5px', textAlign:'justify', border : '1px solid #edeef7', borderRadius : '8px' , marginBottom : '15px'}}>
                    <h2>{destination.name}</h2>
                    <img src={destination.image} alt={destination.name} style={{maxWidth : '100%', borderRadius:'8px'}}/>
                    <p style={{marginTop : '5px'}}>{destination.description}</p>
                </div>
            ))}
        </div>
    );
}