import prisma from '../DB/DbConfig.js'

export const createMission = async (req, res) => {
    try {
        const newMissionSummary = req.body;
        const createdMissionSummary = await prisma.missionSummary.create({
            data: newMissionSummary,
        });
        res.status(201).send({ sucess: true, data: createdMissionSummary });
    } catch (error) {
        console.error('Error creating mission summary:', error);
        res.status(500).json({ error: 'Error creating mission summary', error });
    }
}

export const getMission = async (req, res) => {
    try {
        const missionSummaries = await prisma.missionSummary.findMany();
        res.status(200).send({ success: true, data: missionSummaries });
    } catch (error) {
        console.error('Error fetching mission summaries:', error);
        res.status(500).json({ error: 'Error fetching mission summaries' });
    }
};