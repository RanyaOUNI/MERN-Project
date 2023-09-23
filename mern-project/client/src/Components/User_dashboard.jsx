import React from 'react'
import {Link} from 'react-router-dom'
import { faHome,faBed,faArrowsLeftRightToLine,faTrash,faArrowsRotate,faPen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Breadcrumbs,
  Chip,
  button,
  Dialog,
  Input,
  List,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";

const User_dashboard = () => {

  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow((cur) => !cur);

  return (
    <>    
      <div className="container mt-20 	">

        <div className='personal_info flex justify-center mt-10'>

          <div className='info pr-10 '>
            <h4 className='text-2xl text-green-800 mt-5 ml-20'>Personal Informations :</h4>

            <div className='flex mt-5 ml-10'>
              <div className='ml-10 mt-7'>
                <h5 className='text-lg text-green-700 ml-10 ' >First Name :</h5>
                <h5 className='text-lg text-green-700 ml-10 mt-5' >Last Name :</h5>
                <h5 className='text-lg text-green-700 ml-10 mt-5' >Email :</h5>
              </div>

              <div className='mt-7'>
                <h5 className='text-lg text-gray-700 ml-10 ' >Ranya</h5>
                <h5 className='text-lg text-gray-700 ml-10 mt-5' >Ouni</h5>
                <h5 className='text-lg text-gray-700 ml-10 mt-5' >rania@ouni.com</h5>
              </div>
            </div>

            <Button className='ml-20 mt-5 rounded-full text-sm hover:border-primary hover:text-white"' style={{backgroundColor:"#B7D29F"}} onClick={handleShow}>Change password</Button>
              <Dialog
                size="xs"
                open={show}
                handler={handleShow}
                className="bg-transparent shadow-none"
              >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <Typography className='mt-5 flex justify-center 'style={{color:"#747E38"}} variant="h5">
                      CHANGE PASSWORD
                    </Typography>

                  <CardBody className="flex flex-col gap-4">
                    <Input label="Current Password" color='green' size="lg" />
                    <Input label="New Password" color='green' size="lg" />
                    <Input label="New Password" color='green' size="lg" />
                    
                  </CardBody>

                  <CardFooter className="pt-0">
                    <Button style={{backgroundColor:"#81B95F"}} onClick={handleShow} fullWidth>
                      Confirm
                    </Button>                  
                  </CardFooter>
                </Card>
              </Dialog>

          </div>

          <div className='about_me mt-20'>
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <h5 className='text-lg text-green-800 ml-10 mb-2' >ABOUT ME :</h5>
                <h5 className='text-lg text-gray-700 ' >
                  I'm a Front End developer,I am an Instructor in Coding Dojo Africa.I'm looking for a roomate to share an apartment in Ghazela.
                </h5>
              </CardBody>
            </Card>
          </div>

        </div>

        
        <div className='preferences mt-10 ml-20'>
          <h4 className='text-2xl text-green-800 ml-10 pl-5'>Preferences :</h4>
          <div className='preferences_list ml-20 mt-10'>
            <Card className="w-96">
              <List>
                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                <h4 className='text-lg text-gray-700'>Manouba</h4>
                  <ListItemSuffix>
                    <IconButton variant="text" color="blue-gray">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                      </svg>
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>

                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                  <h4 className='text-lg text-gray-700'>Apartmant</h4>
                  <ListItemSuffix>
                    <IconButton variant="text" color="blue-gray">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                      </svg>
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>

                <ListItem ripple={false} className="py-1 pr-1 pl-4">
                  <h4 className='text-lg text-gray-700'>3 Occupants</h4>
                    <ListItemSuffix>
                      <IconButton variant="text" color="blue-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                        </svg>            
                      </IconButton>
                    </ListItemSuffix>
                </ListItem>
              </List>
            </Card>          
          </div>
        </div>
              
        <div className='bookmark ml-20'>
          <h4 className='text-2xl text-green-800 ml-20 mt-10'>Bookmark :</h4>        
          <div className='bookmark_list flex justify-start ml-10 mt-5'>                
              <div className='flex justify-start ml-10 mt-5 gap-7'>

                      <Card className="w-full max-w-[26rem] shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                          <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check"
                          />
                          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                          <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="!absolute top-4 right-4 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-6 w-6"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          </IconButton>
                        </CardHeader>

                        <CardBody>
                          <div className="mb-3 flex items-center justify-between">

                          <h5 className='text-lg text-gray-800 ml-2 font-bold' >MANOUBA</h5>
                          <h5 className='text-lg text-gray-800 ml-2 font-bold' >300 TDN</h5>

                          </div>

                          <div className="group mt-8 inline-flex flex-wrap items-center gap-10">
                            <div className='flex flex-col gap-2' >
                            <FontAwesomeIcon icon={faHome} style={{color:"#324439"}} size='2xl' />
                            <h1 className='text-center font-bold text-green-700'>Flat</h1> 
                            </div>

                            <div className='flex flex-col gap-2' >
                              <FontAwesomeIcon icon={faBed} style={{color:"#324439"}} size='2xl'/>                            
                            <h1 className='text-center font-bold text-green-700'>5</h1> 
                            </div>

                            <div className='flex flex-col gap-2' >
                              <FontAwesomeIcon icon={faArrowsLeftRightToLine} style={{color:"#324439"}} size='2xl'/>
                              <h1 className='text-center font-bold text-green-700'>200 m2</h1> 
                            </div>                                    
                          </div>
                        </CardBody>

                        <CardFooter className="pt-3 flex justify-center">
                          <Button className='text-center text-md font-bold text-white' style={{backgroundColor:"#81B95F"}}>
                            View
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="w-full max-w-[26rem] shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                          <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="ui/ux review check"
                          />
                          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                          <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="!absolute top-4 right-4 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-6 w-6"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          </IconButton>
                        </CardHeader>

                        <CardBody>
                          <div className="mb-3 flex items-center justify-between">

                          <h5 className='text-lg text-gray-800 ml-2 font-bold' >MANOUBA</h5>
                          <h5 className='text-lg text-gray-800 ml-2 font-bold' >300 TDN</h5>

                          </div>

                          <div className="group mt-8 inline-flex flex-wrap items-center gap-10">
                            <div className='flex flex-col gap-2' >
                            <FontAwesomeIcon icon={faHome} style={{color:"#324439"}} size='2xl' />
                            <h1 className='text-center font-bold text-green-700'>Flat</h1> 
                            </div>

                            <div className='flex flex-col gap-2' >
                              <FontAwesomeIcon icon={faBed} style={{color:"#324439"}} size='2xl'/>                            
                            <h1 className='text-center font-bold text-green-700'>5</h1> 
                            </div>

                            <div className='flex flex-col gap-2' >
                              <FontAwesomeIcon icon={faArrowsLeftRightToLine} style={{color:"#324439"}} size='2xl'/>
                              <h1 className='text-center font-bold text-green-700'>200 m2</h1> 
                            </div>                                    
                          </div>
                        </CardBody>

                        <CardFooter className="pt-3 flex justify-center">
                          <Button className='text-center text-md font-bold text-white' style={{backgroundColor:"#81B95F"}}>
                            View
                          </Button>
                        </CardFooter>
                      </Card>
              </div>
          </div>
        </div>
                
        <div className="flex justify-center mt-20 gap-5">
          <Link className='ml-20 mb-5 rounded-full w-52 h-9 pt-2 pb-1 text-center text-white' style={{backgroundColor:"#89E488"}} to={`/edit`}>edit my profile <FontAwesomeIcon icon={faPen} />
          </Link>
          <Button className='ml-20 mb-5 rounded-full pb-7 h-8 text-sm font-normal lowercase' style={{backgroundColor:"#89E488"}}>Delete My Account <FontAwesomeIcon icon={faTrash} /></Button>
          <Button className='ml-20 mb-5 rounded-full pb-7 h-8 text-sm font-normal lowercase' style={{backgroundColor:"#89E488"}}>convert to propose accomodation <FontAwesomeIcon icon={faArrowsRotate} /></Button>        
        </div>

      </div>

    </>
  )
}

export default User_dashboard