import styled from 'styled-components'

export const ModalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2{
    padding: 0;
    padding-bottom: 10px;
    margin-top: -5px;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    text-align: center;
}
`

export const UserProfile = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-top: 5px;
align-items: center;
img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
}
p.username{
    margin-left: 5px;
    font-weight: bold;
}
span.select{
    height: 100%;
}

span.select p{
    position: absolute;
    top: 10px;
    left:2px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
}

svg{
    margin-right: 2px;
}

.ant-select-selector{
    height: 30px;
    border: none!important;
    background-color: lightgrey!important;
    border-radius: 3px;
    .selectP{
        display: flex;
    }
}
`
export const PostInputField = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;
    resize: none;
    margin-top: 5px;
    background-color:#f0f2f5;
    border: none;
    outline: none;
    border-radius: 7px;
    font-size: 16px;
  font-weight: 900;
  color: black;
    ::placeholder { 
  color: grey;
  font-size: 16px;
  font-weight: 900;
}
`
export const EmojiOpener = styled.div`
width: 100%;
padding: 5px;
display: flex;
justify-content: flex-end;

svg{
    color:gold;
    width:30px;
    height:30px
}
`
export const EmojiPickerContainer = styled.div`
position: absolute;
z-index: 2;
`

export const ImagePicker =styled.div`

margin-right: 10px;

img{
    width: 100px;
    height: 100px;
    object-fit: cover;
}
input{
    display: none;
}

.previewImage{

    position: relative;
}
.deleteIcon{
    position:absolute;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    right: 3px;
    top: 2px;
    color: gray;
    cursor: pointer;
}
`