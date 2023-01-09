// Verify user ownership of resource
module.exports = (model) => (req, res, next) => {
    model.findById(req.params.id, (err, resource) => {
      if (err) return res.status(500).send(err);
      if (!resource) return res.status(404).send('Resource not found');
      if (resource.user.toString() !== req.user._id)
        return res.status(401).send('Unauthorized access');
      req.resource = resource;
      next();
    });
  };
  