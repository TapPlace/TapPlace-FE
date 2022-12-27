const feedbackPercent = (options: any) => {
  const all = options.success + options.fail;
  const suc = Math.round((100 / all) * options.success);
  const fai = Math.round((100 / all) * options.fail);

  return { suc, fai };
};

export default feedbackPercent;
