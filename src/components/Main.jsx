import './style.scss';
import ListItem from './ListItem';
import Profile from './Profile';
import dataList from '../assets/api/characterList';
import { useState } from 'react';


const Page1 = () => {
    const [data, setData] = useState(dataList);
    const [isChecked, setIsChecked] = useState(false); //활성 체크상태
    const [isSelected, setIsSelected] = useState(null); // 라디오버튼 선택 상태
    const [addList, setAddList] = useState({name:'', animal:'', desc:'', imgurl:''});
    const [addData, setAddData] = useState([]); // 추가한 데이터 저장

    const changeCheckbox=(e)=>{
        setIsChecked(e.target.checked);
    }
    const isSelect =(id)=>{
        const item = data.find(item=>item.id===id); 
        setIsSelected(item);
    }

    const inputChange =(e)=>{
        const {name, value} = e.target;
        setAddList(prev=> ({...prev, [name]:value}));
    }
    
    const handleResister=()=>{
        const newId=data.length ? Math.max(...data.map(item=>item.id))+1 : 1;
        const newCharacter ={
            id:newId, 
            ...addList,
        };
        setData(prevData=>[...prevData, newCharacter]);
        setAddList({name:'', animal:'', desc:'', imgurl:''});
        setAddData(prev => [...prev, newCharacter]); // 추가한 데이터 저장
    }
    
    const onReset =()=>{
        setData(prevData => prevData.filter(item => !addData.includes(item))); // 추가한 데이터 삭제
        setAddData([]); // 추가한 데이터 초기화
        
    }
    return (
        <div className='wrap'>
            <div className="left">
                <div className='text'>
                <h2>먼작귀 등장인물 : {data.length}마리</h2>
                <div className='btn'><label htmlFor=""><input type="checkbox" onChange={changeCheckbox}/>{isChecked?'비활성':'활성'}</label>
                </div>
                </div>
                <ul className='list'>
                  {
                    data.map(item=><ListItem 
                        key={item.id}
                        {...item} 
                        onSelect={isSelect}
                        isSelected={isSelected?.id===item.id}/>)
                    }
                    
                </ul>
                <button className="origin" onClick={onReset}>원래상태</button>

                {/* 체크박스 체크 시 info 나타나기 */}
                {isChecked && (
                    <div className="info">
                    <div>
                    <label htmlFor="name">이름</label>
                    <input className='w80' type="text" id="name" name="name" value={addList.name} onChange={inputChange}/>
                    </div>
                    <div>
                    <label htmlFor="animal">동물</label>
                    <input className='w80' type="text" id="animal" name="animal" value={addList.animal} onChange={inputChange}/>
                    </div>
                    <div>
                    <label htmlFor="imgurl">이미지URL</label>
                    <input type="text" id="imgurl" name="imgurl" value={addList.imgurl} onChange={inputChange} placeholder='./images/character5_big.png' />
                    </div>
                    <button onClick={handleResister}>등록</button>
                </div>
                )}
                

            </div>

            <div className="right">
                {isSelected? <Profile selectedItem={isSelected}/>: <p>[예시] ./images/character5_big.png <br /></p>}
             
            </div>
        </div>
    );
};

export default Page1;