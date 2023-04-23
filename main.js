require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log('Bot is online!');
});

client.login(MTA5OTU5OTc5Nzc0NjQyMTg2MQ.Gt4m1X.iusQ7QMcoGnrgaRsIog7zMNkGBgcNDWEnJXv4w);
