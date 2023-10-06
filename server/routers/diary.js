const { Router } = require('express')

const diaryController = require('../controllers/diary.js')

const diaryRouter = Router();

diaryRouter.get('/:username', diaryController.index)
diaryRouter.get("/:username/:id", diaryController.oneEntry)

module.exports = diaryRouter