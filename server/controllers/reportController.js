import Report from '../models/Report.js';

export const reportUser = async (req, res) => {
  const { reportedUser, reason } = req.body;

  const report = new Report({
    reportedBy: req.user.id,
    reportedUser,
    reason
  });

  await report.save();
  res.json({ message: "User reported successfully" });
};

export const getAllReports = async (req, res) => {
  const reports = await Report.find().populate('reportedBy reportedUser', 'name email');
  res.json(reports);
};

export const markReportResolved = async (req, res) => {
  await Report.findByIdAndUpdate(req.params.id, { resolved: true });
  res.json({ message: "Report marked as resolved" });
};
