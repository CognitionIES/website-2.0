type FAQ = {
    question: string;
    answer: string;
    category?: string;
  };
  
  const faqs: FAQ[] = [
    //General
    {
      question: "What makes us different from others?",
      answer: "We go beyond conventional engineering by integrating innovation, cost optimization, and efficiency into every project. Our expertise in Product Engineering and Plant Engineering ensures high-performance solutions that drive business success.",
      category: "General"
    },
    {
      question: "Do we offer end-to-end engineering services?",
      answer: "Yes! From product ideation to manufacturing optimization, we provide comprehensive engineering solutions that cover every stage of product development.",
      category: "General"
    },
    {
      question: "How do we ensure transparency with clients?",
      answer: "We maintain open communication, detailed progress reports, and clear project roadmaps, ensuring clients are informed at every step.",
      category: "General"
    },
    {
      question: "Do we work with global clients?",
      answer: "Yes! We have experience collaborating with international companies, primarily in the USA and Europe, and we tailor our solutions to global standards.",
      category: "General"
    },
    {
      question: "What support do we provide after project completion?",
      answer: "We offer post-project support, troubleshooting, and continuous improvement recommendations to ensure long-term success.",
      category: "General"
    },
    //Product
    {
      question: "Do we offer competitive product benchmarking?",
      answer: "Absolutely! We analyze competitor products, assess strengths and weaknesses, and recommend strategic improvements. Our detailed reports help businesses make informed decisions about product improvements.",
      category: "Product"
    },
    {
      question: "What industries do we specialize in for product development?",
      answer: "We cater to manufacturing, industrial equipment, automotive, and heavy machinery industries, delivering customized solutions tailored to specific business needs.",
      category: "Product"
    },
    {
      question: "How do we ensure smooth product lifecycle management?",
      answer: "We manage Engineering Change Requests (ECR), product data, and version control to keep designs up-to-date and aligned with market demands.",
      category: "Product"
    },
    {
      question: "How do we handle complex engineering challenges?",
      answer: "Through structured problem-solving methodologies like root cause analysis, Pareto analysis, and cost function assessment, we provide effective solutions to complex challenges.",
      category: "Product"
    },
    {
      question: "How do we ensure timely project completion?",
      answer: "Time is money, and we value both! We utilize Gantt charts, Pareto analysis, and milestone tracking to ensure smooth project execution. Our structured approach minimizes delays and maximizes productivity to deliver results on time.",
      category: "Product"
    },
    //Process
    {
      question: "Do we assist in automation and process improvement?",
      answer: "Yes! We help integrate automation, robotics, and smart manufacturing technologies to boost productivity and reduce manual errors.",
      category: "Process"
    },
    {
      question: "Is digital piping design beneficial for new and existing plants?",
      answer: "Absolutely! Digitalization is beneficial for new plant designs (for accuracy and efficiency) and existing plants (for retrofitting and optimization).",
      category: "Process"
    },
    {
      question: "Can digitalization reduce piping maintenance costs?",
      answer: "Yes! By using AI-driven predictive analytics and condition monitoring, digitalization helps prevent failures and schedule proactive maintenance, reducing costs significantly.",
      category: "Process"
    },
    {
      question: "How does plant digitalization impact workforce productivity?",
      answer: "By automating repetitive tasks and providing real-time insights, digitalization allows workers to focus on high-value activities, improving overall productivity.",
      category: "Process"
    }
  ];
  
  export default faqs;
  