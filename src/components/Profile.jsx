
const Profile = ({selectedItem}) => {
    const {id, imgurl, animal, desc, name} = selectedItem
    if (!selectedItem) {
        return <p>예시 ./images/character5_big.png</p>
    }
    return (
        <>
            <img src={imgurl} alt={name} />
            <h3>이름 : {name}</h3>
            <span>종 :{animal}</span>
            <p>설명 : {desc}</p>
           
           
        </>
    );
};

export default Profile;