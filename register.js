const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test command')
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('🚀 Started refreshing application commands.');
        await rest.put(
            Routes.applicationCommands('1450262066727354478'),
            { body: commands },
        );
        console.log('✅ Successfully reloaded application commands.');
    } catch (error) {
        console.error(error);
    }
})();
