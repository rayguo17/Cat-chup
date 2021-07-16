import { Button } from "@material-ui/core"

export const CreatePostBtnContainer = (props)=>{
    const {toggle} = props

    return (
        <div className='whatsOnYourMindContainer'>
            <div style={{height:'100%',position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button size='large' variant='outlined' onClick={toggle} color='primary'>What's on your mind,username?</Button>
            </div>
            
        </div>
    )
}