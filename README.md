## Inspiration ⚡
Open collective charges a lot of fee and the process is not open to all. So, I have built an alternative to open collective that can be trusted and will take no charge to uplift open source projects.

## What it does ⚒
It helps users to collect donation for their projects to continue work on them. The user can sign in through the app using Near wallet(testnet) and use it features. Once the user is logged in, they can add their own project or check the project listed on the app. The project data and user data is stored on Near blockchain and the transaction function is attached to all of them.

## How I built it 👀
Smart Contract is built using Web Assembly and deployed on NEAR testnet. The Frontend is built using React.js and deployed using Vercel.

## Challenges I ran into 🚩
I am completely new to blockchain, so it took a lot of time to build simple logic on smart contract. It took more than 3 days to just get familiar with the code. Near Docs helped a lot to get started and deploy smart contract the right way. I got into one issue of transferring Near when the user clicks on "donate" button, So I hardcoded the value for now. When the user clicks on the donate button, ~0.00001 NEARs are being transferred from the logged in account.

## Accomplishments that I am proud of 😎
I am proud of the accomplishment that I built a Full Stack blockchain App for the first time and completed that on time.

## What we learned 🙌
I learned how data in blockchain works, building Smart Contracts with Web Assembly and using near-api-js sdk for calling Smart Contract from the Frontend code.

## Smart Contract
The Smart Contract code can be found https://github.com/ankitzm/near-funding and it is deployed on Near blockchain on testnet. \
Here is the explorer link for smart contract - https://explorer.testnet.near.org/accounts/dev-1645439743021-63191839817556

## How to replicate the repo 👾
1. Clone the repo on your local machine.
2. ``` npm install ```
3. ``` npm start ```
4. That's it, the localhost will be started and the web-app can be used.
5. Leave a ⭐ if you loved the project.
