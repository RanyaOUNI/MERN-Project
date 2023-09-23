import React from 'react'
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Checkbox,
    Textarea,
    Button,Tooltip,
    IconButton,
    Breadcrumbs,
    Chip,
    button,
    Dialog,
    Input,
    List,
    ListItem,
    ListItemSuffix,
    Select,
    Option,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Switch
} from "@material-tailwind/react";
  

const Edit_profile = () => {
    return (
        <>
        <div className='mt-20 content-center'>
            <h4 className='text-2xl text-green-800 ml-10 mt-10 pl-5'>Edit you Profile:</h4>
            <div className='container flex justify-center gap-10'>
                <Card color="transparent" shadow={false}>                    
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="First Name" />
                                <Input size="lg" label="Last Name" />
                                <Input size="lg" label="Email" />
                                <Input type='date' size="lg" label="Date Of Birth"/>
                                <div className="w-96">
                                    <Select label="Gender">
                                        <Option>Male</Option>
                                        <Option>Female</Option>
                                    </Select>
                                </div>
                                <div className="w-96">
                                    <Textarea label="Tell us about you" />
                                </div>
                            </div>
                        </form>
                        
                </Card>
                <div className='search_details mt-7'>
                    <div className="w-96 mb-5">
                        <label htmlFor="">Search Area:</label>
                        <Select label="Select Area">
                            <Option>Manouba</Option>
                            <Option>Bizerta</Option>
                            <Option>Kasserine</Option>
                            <Option>Sévilla</Option>
                            <Option>NewYork</Option>
                        </Select>
                    </div>                    
                    <label htmlFor="">Maximum Badget :</label>
                    <Input size="lg" label="Upload file" />
                    <br />
                    <label htmlFor="">Profile Image :</label>
                    <Input size="lg" label="Upload file" />
                    <div className=''>
                    
                    <div className='mt-5 pr-5'><Switch color='green' defaultChecked /> Receive by email the lidt of new ads </div>
                    <div>published in this area.</div>
                    </div>

                </div>

            
            </div>
                
            <Button className="text-lg w-56 ml-72" style={{backgroundColor:"#81B95F"}} >
                Edit
            </Button>     
        </div>                  
        
        
        
        
                
        </>
    )
}

export default Edit_profile