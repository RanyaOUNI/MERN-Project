import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
// import image1 from '../../public/img/Istockphoto.png'

export function Home() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>

      <div className="relative  h-screen content-center items-center justify-center pt-7 pb-32">

        <div className="absolute top-0 h-full w-full bg-[url('https://media.istockphoto.com/id/184337065/photo/college-roomate-friends-working-and-studying-together-in-apartment-dorm.jpg?s=2048x2048&w=is&k=20&c=6Xh4PMeFkri4piqB0VH_-Q6Ooqtcz0zmwLNOag2Sx6M=')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />





        <div className="max-w-4xl container relative mx-auto">
          <div className="mt-[30%]" >
            <h1 class="text-6xl font-extrabold text-white mb-60 ml-[20%] ">Find Home Together</h1>
            <form class="flex items-center ">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <Input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-400 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
              </div>
              <Button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </Button>
            </form>


          </div>



        </div>
      </div >


      <section section className="relative bg-blue-gray-50/50 py-24 px-4" >
        <div className="container mx-auto">
          <PageTitle heading="Why Use spare Safe"> </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section >
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto ">
          <PageTitle heading="THE MOST POPULAR AREAS"></PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
