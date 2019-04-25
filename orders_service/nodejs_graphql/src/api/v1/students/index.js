import Student from '../../../models/student';

function createStudentRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/api/v1/students',
      handler: function(request, reply) {
        return Student.find(); //'SELECT * FROM Student';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/students/findOne',
      handler: function(request, reply) {
        if (request.query) {
          const { name } = request.query;
          return Student.find({ name });
        }
        return Student.find(); //'SELECT * FROM Student';
      }
    },
    {
      method: 'POST',
      path: '/api/v1/students/d',
      handler: function(request, reply) {
        const { name, lastname, hobbie } = request.payload;
        const student = new Student({
          name,
          lastname,
          hobbie
        });
        return student.save();
      }
    }
  ]);
}

export default createStudentRoutes;
