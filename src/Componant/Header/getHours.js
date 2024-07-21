
const getHours = () => {
        setInterval(() => {
          const hours = new Date().gethours();
          const minutes = new Date().getMinutes();
          const seconds = new Date().getSeconds();
            console.log(hours);
            // return (
            //     <div>{hours} {minutes} {seconds} </div>
            //         )
        }, 1000);
}

export default getHours