// import React from 'react'

// export default function ProfileCard({userInfo}) {

//   return (
//     <div className='container'>

//         {/* <div className='card'>
//             <img src={props.imageSrc} alt={props.userName} />
//             <h2>{props.userName}</h2>
//             <p>{props.desc}</p>
//             <ul>
//                 <li>{props.skillOne}</li>
//                 <li>{props.skillTwo}</li>
//             </ul>
//         </div>*/}

//     {/* <div className='card'>
//             <img src={imageSrc} alt={userName} />
//             <h2>{name}</h2>
//             <p>{desc}</p>
//             <ul>
//                 <li>{skillOne}</li>
//                 <li>{skillTwo}</li>
//             </ul>
//         </div> */}

//         {

//             userInfo.map((user)=>{
//                 return(
//                     <div className='card'>
//                         <img src={user.imagePath} alt={user.name} />
//                         <h2>{user.name}</h2>
//                         <p>{user.description}</p>
//                         <ul>
//                             {
//                                 user.skills.map((skill)=>{
//                                     return(
//                                         <li>{skill}</li>
//                                     )
//                                 })
//                             }
//                         </ul>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }



import React from 'react';

export default function ProfileCard({ userInfo }) {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {userInfo.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <img
            src={user.imagePath}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.description}</p>
          <ul className="space-y-1 space-x-1">
            {user.skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
