// Local definition to replace the missing 'types' file
export const ProjectStatus = {
  RUNNING: 'Running',
  COMPLETED: 'Completed'
};

export const projects = [
  {
    id: 'p1',
    title: 'Autonomous Delivery Rover',
    description: 'A GPS-guided autonomous rover designed for last-mile campus delivery, utilizing LiDAR for obstacle avoidance and ROS for navigation logic.',
    technologies: ['ROS', 'Python', 'C++', 'LiDAR', 'Arduino'],
    completionDate: '2024-05-15',
    status: ProjectStatus.COMPLETED,
    images: ['https://picsum.photos/seed/rover1/800/600', 'https://picsum.photos/seed/rover2/800/600'],
    team: ['Alex Johnson', 'Sam Lee', 'Mia Wang']
  },
  {
    id: 'p2',
    title: 'Smart Agriculture IoT Node',
    description: 'Monitoring soil moisture, temperature, and humidity across a field using LoRaWAN to provide real-time analytics to farmers via a central dashboard.',
    technologies: ['LoRaWAN', 'ESP32', 'Node-RED', 'MQTT'],
    expectedCompletionDate: '2025-02-10',
    status: ProjectStatus.RUNNING,
    images: ['https://picsum.photos/seed/iot1/800/600'],
    team: ['Sarah Chen', 'Kevin Smith'],
    objectives: [
      'Reduce water wastage by 30%',
      'Optimize fertilizer application schedules',
      'Provide mobile alerts for extreme soil conditions'
    ]
  },
  {
    id: 'p3',
    title: 'Gesture-Controlled Robotic Arm',
    description: 'A 6-DOF robotic arm that mimics human hand movements using computer vision and mediaPipe.',
    technologies: ['OpenCV', 'MediaPipe', 'Servo Motors', 'Raspberry Pi'],
    completionDate: '2024-11-20',
    status: ProjectStatus.COMPLETED,
    images: ['https://picsum.photos/seed/arm/800/600'],
    team: ['David Miller', 'Elena Rodriguez']
  }
];