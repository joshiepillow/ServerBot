const { SlashCommandBuilder } = require('@discordjs/builders');
const shell = require('shelljs')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('start')
		.setDescription('attempts to start the server!'),
	async execute(interaction) {
		await interaction.reply('Starting...');
		shell.exec('./start_server.sh', async (code, stdout, stderr) => {
			console.log(`code: ${code}\nstdout: ${stdout}\nstderr: ${stderr}`);
			if (code == 0) {
				await interaction.followUp('Success!');
			} else {
				await interaction.followUp('Failed.');
			}
		});
	},
};