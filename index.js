import 'dotenv/config';
import commandList from './commands.js';
import { cityNames } from './cityNames.js';
import {Client, Intents} from 'discord.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });
const prefix = '!';
const token = process.env.TOKEN;

const prefixedCommand = (command) => {
  return prefix + command;
}

//bot

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  // client.on('interaction', async interaction => {
  //     console.log('interaction', interaction);
  //   if (!interaction.isCommand()) return;

  //   if (interaction.commandName === 'ping') {
  //     await interaction.reply('Pong!');
  //   }
  // });

  client.on('messageCreate', msg => {
    if (msg.content === prefixedCommand('ping')) {
    msg.reply('Pong!');
    }
    if(msg.content === commandList[0].call){
      console.log('call orel');
      commandList[0].out(msg)
    }

    if(msg.content.includes(commandList[1].call) && !msg.author.bot){
      console.log('is bot', msg.author.bot);
      //consts
      const length = msg.content.length + 1;
      const commandLength = commandList[1].call.length + 1;
      const city = msg.content.slice(commandLength,length)
      // const city = msg.content.slice(commandLength,length).split('').map((letter,i) => i === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
      const isCityExist = cityNames.includes(city)
      //call weather api or show msg
      if(!isCityExist){
        msg.reply(`Name ${city} is wrong. Try to write "${commandList[1].call} Name"`)
        return
      }
      if(isCityExist){
        commandList[1].out(msg,city)
      }
    }
  }
    );

client.login(token);